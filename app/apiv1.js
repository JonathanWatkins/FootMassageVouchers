// app/apiv1.js

/*  operation  HTTP     routes          description
*
*   /
*   READ       GET       /              outputs info about api
*
*   /games
*   READ       GET      /games          gets all games
*   CREATE     post     /games          create a game
*   read       get      /games/:id      gets a game
*   delete     delete   /games/:id      delete a specific game
*   update     update   /games/:id      update a specific game
*
*   /users
*
*/

// load up the models
var Code           = require('./models/code');

module.exports = function(route, passport) {


    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    route.get('/', function(req, res) {
        res.send('api v1'); // load the index.ejs file
    });

    // codes resource
    route.get('/codes', function(req, res) {
        // if admin show list of current games
        // in this version only one game is allowed
        // if standard user, show list of games that can be started or continued
        // asynchronous
        // User.findOne wont fire unless data is sent back
        //var gamesList = {};

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        Code.find({}, function(err, codes) {
          res.send({codes});
        });
    });

    // get a game
    route.get('/codes/:plainKey', function(req, res) {
        Code.find({'key.plain' : req.params.plainKey}, function(err, code) {
          if (code.length===0) {
            res.status(404);
          }
          res.send({ code });
        });
    });


    route.post('/codes', function(req, res) {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        var newCode            = new Code();

        // set the game start month

        newCode.key.plain = newCode.generatePlainCode();

        // save the user
        newCode.save(function(err) {
            if (err) {
                //throw err;
                req.send('Error saving the new code.');
                //res.redirect('/games');
            }

            Code.find({}, function(err, codes) {
              res.send({codes});
            });

        });


    });

    // delete a code
    route.delete('/codes/:plainKey', function(req, res) {

        Code.find({'key.plain' : req.params.plainKey}).remove( function(err, code) {
          if (err || code === 0) {
            res.status(404);
          }
          res.send({ code });
        });

    });


    /*
    // update a game
    route.put('/games/:id', function(req, res) {
      console.log(req.body.data);
      Game.findByIdAndUpdate(req.params.id, { $set: {game: req.body.data}}, { new: true }, function (err, game) {
        if (err) {
          req.send('Error updating game.');
        }
        console.log(game);
        res.send(game);
      });
    });


    // delete a game
    route.delete('/games/:id', function(req, res) {

        Game.find({ _id:req.params.id}).remove( function(err, games) {
          res.send({games});
        });

    });

    // get list of players playing a game
    route.get('/games/:gameid/players', function(req, res) {
        console.log("players");
        GameState.find({ gameid: req.params.gameid}, function(err, players) {
          res.send({ players });
        });
    });
    */
};
