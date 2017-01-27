var insertionSort = function(array) {
  for (var ix = 1; ix < array.length; ix++) {
    // Assume that array.slice(0, ix) is sorted.

    // Grab the current element
    var elem = array[ix];
    var hole = ix;

    // Find the insertion point
    while (hole && elem.value < array[hole - 1].value) {
      array[hole] = array[hole - 1];
      hole -= 1;
    }

    // Insert the element
    array[hole] = elem;
    /* At this point, `elem` has been inserted,
     * and array.slice(0, ix + 1) is now sorted.*/
  }

  return array;
};