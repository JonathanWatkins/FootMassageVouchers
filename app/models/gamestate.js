// app/models/gamestate.js
// load the things we need
var mongoose = require('mongoose');

var defaultGameState = {
  'Share A' : [0],
  'Call A' : [0],
  'Put A' : [0],
  'Share B' : [0],
  'Call B' : [0],
  'Put B' : [0],
  'Share C' : [0],
  'Call C' : [0],
  'Put C' : [0],
  'Share D' : [0],
  'Call D' : [0],
  'Put D' : [0],
  'Share E' : [0],
  'Call E' : [0],
  'Put E' : [0]
};


// define the schema for our gameState model
var gameStateSchema = mongoose.Schema({

    gameId : Object,
    playerId : Object,
    gameState  : {type: Object, default: defaultGameState},
    pendingState : {type: Object, default: defaultGameState}

});

// methods ======================

// create the model for gameState and expose it to our app
module.exports = mongoose.model('GameState', gameStateSchema);
