// app/models/game.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var codeSchema = mongoose.Schema({

    key           : {
        plain : String,
        active : Boolean
    }

});

// methods ======================
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

codeSchema.methods.generatePlainCode = function(password) {
  var code = [];
  for (var j= 0; j<5;j++) {
    code.push(makeid());
  };
  return code.join("-");
};


// create the model for users and expose it to our app
module.exports = mongoose.model('Code', codeSchema);
