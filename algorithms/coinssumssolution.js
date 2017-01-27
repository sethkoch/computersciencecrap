var coins = [1,2,5,10,20,50,100,200];

var coinSums = function(total){
  var counter = 0;
  coins.sort(function(a, b) { return a - b; });
  (function recurse (index, remainder) {
    var coin = coins[index];
    if (index === 0) {
      remainder % coin === 0 && counter++;
      return;
    }
    while (remainder >= 0) {
      recurse(index-1, remainder);
      remainder -= coin;
    }
  })(coins.length-1, total);

  return counter;
};