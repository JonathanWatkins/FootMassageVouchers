// app/routes.js

// load up the user model
var Code           = require('./models/code');

var needle         = require('needle');

module.exports = function(route, passport, apiUrl, transporter) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    route.get('/', function(req, res) {
        res.render('index.ejs', {
          successMessage : req.flash('successMessage'),
          errorMessage : req.flash('errorMessage')
        }); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    route.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    route.post('/login', passport.authenticate('local-login', {
        successRedirect : '/codes', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    route.get('/signup', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    route.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/codes', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    route.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });


    // =====================================
    // GAME SECTION =====================
    // =====================================
    // landing page for all users
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)

    route.get('/codes', isLoggedIn, function(req, res) {
        // if admin show list of current games
        // in this version only one game is allowed
        // if standard user, show list of games that can be started or continued

        needle.get(apiUrl + '/codes', function(error, response) {
            if (!error && response.statusCode == 200) {
            console.log(response.body);
            console.log("Number of codes: " + response.body.codes.length);

            res.render('codes.ejs', {
                user : req.user, // get the user out of session and pass to template
                codesList : response.body.codes,
                successMessage : req.flash('successMessage'),
                errorMessage : req.flash('errorMessage')
            });

          } else {
            res.send(error);
          }

        });

    });

    // if isAdmin add a new game
    route.get('/codes/new', isLoggedIn, isAdmin, function(req, res) {
        // check if a game already exists
        // if so, return with message
        // otherwise, create a game

        // create new game
        // POST request to /games
        needle.post(apiUrl + '/codes', '', function(error, response) {
          console.log(response.body)
          if (error) {
            req.flash('errorMessage', 'Error creating the new code.');
          }
          else {
            req.flash('successMessage', 'New code added.');
          }
          res.redirect('/codes');
        });






    });

    // remove code
    route.get('/codes/:id/remove', isLoggedIn, isAdmin, function(req, res) {
        var id = req.params.id;

        needle.delete(apiUrl + '/codes/' +id, '', function(error, response) {
            if (!error && response.statusCode == 200) {

              res.redirect('/codes');

            } else {
              res.send(error);
            }

        });
    });

    route.get('/codes/:id/redeem', function(req, res) {

      needle.get(apiUrl + '/codes/'+ req.params.id , function(error, response) {
          if (!error && response.statusCode == 200) {
          console.log(response.body.code[0]._id)

          // get this players game
          // games/:id/players/:id/gamestate

          } else {
            res.send(error);
          }

      });

    });

    route.post('/codes/redeem', function(req, res) {
      var code = req.body.code1+'-'+req.body.code2+'-'+req.body.code3+'-'+req.body.code4+'-'+req.body.code5;

      console.log("code: " + code);
      needle.delete(apiUrl + '/codes/'+ code, null, function(error, response) {
          if (!error && response.statusCode == 200) {

          console.log(response.body)

          var mailOptions = {
            from: '"worker" <dreamersedgeworker@gmail.com>', // sender address
            to: 'oliandmolly@yahoo.co.uk, jmtrik@gmail.com', // list of receivers
            subject: 'Foot Massage Code Redeemed ✔', // Subject line
            text: 'Congratulations you have redeemed a foot massage voucher.', // plaintext body
            html: '<b>Congratulations you have redeemed a foot massage voucher.</b>' // html body
          };

// send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
          if(error){
            return console.log(error);
          }
          console.log('Message sent: ' + info.response);
        });

          // get this players game
          // games/:id/players/:id/gamestate


          req.flash('successMessage', 'You have redeemed your code.');
          res.redirect('/');

          } else {
            req.flash('errorMessage', 'You entered an invalid code.');
            res.redirect('/');
          }

      });

    });



    // =====================================
    // LOGOUT ==============================
    // =====================================
    route.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    req.flash('errorMessage', 'You need to be logged in to view this page.');
    res.redirect('/');
}

// route middleware to make sure a user is logged in as admin
function isAdmin(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.user.local.isAdmin)
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
