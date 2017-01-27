var sumArray = function(array) {
  var maxSum = -Infinity;
  var currentSum = 0;
  for(var i = 0; i < array.length; i++) {
    currentSum += array[i];
    maxSum = Math.max(maxSum, currentSum);
    if(currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};