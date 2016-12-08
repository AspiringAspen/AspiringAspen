module.exports = {
  getDeck(players, deck, numOfCards) {
    // players: object of player data
    var seen = {};

    var keys = Object.keys(players)

    while ( deck.length < numOfCards ) {
      var randomPlayer = players[ Math.floor( Math.random() * players.length ) ];
      var playerName = randomPlayer.name;

      if ( seen.hasOwnProperty( playerName ) === false ) {
        deck.push(randomPlayer)
        seen[ playerName ] = true;
      }
    }

    return deck;
  }
}