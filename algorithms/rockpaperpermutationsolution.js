var rockPaperPermutation = function (rounds) {
  var outcomes = [];
  if (!rounds) return outcomes;
  var plays = ['r', 'p', 's'];

  var combos = function(roundsToGo, playedSoFar){
    if( roundsToGo === 0 ){
      outcomes.push( playedSoFar );
      return;
    }
    for(var i=0; i < 3; i++ ){
      var currentPlay = plays[i];
      combos( roundsToGo-1, playedSoFar + plays[i] );
    };
  };
  combos(rounds, '');
  return outcomes;
};