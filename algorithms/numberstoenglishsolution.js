var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};


function numberToEnglish(num) {
  var n = num, output, numInPlace, numLeft, place, restOfString;
  if (numbersToWords[n]) {
    // numbers less than 20 or divisible by 10
    output = numbersToWords[n];
  } else if (n < 100) {
    // tens and a single digit, hyphenated
    numInPlace = Math.floor(n / 10);
    numLeft = n % 10;
    output = numbersToWords[numInPlace * 10] +'-'+ numberToEnglish(numLeft);
  } else {
    // combo of number and a place name
    if (n < 1000) {
      // the hundreds place is special
      place = 100;
    } else {
      // or multiple of 1000
      place = 1000;
      while (place * 1000 <= n) {
        place *= 1000;
      }
    }

    numInPlace = Math.floor(n / place);
    numLeft = n % place;
    // assemble this 1000s place
    output = numberToEnglish(numInPlace) +' '+ numbersToPlace[place];
    // assemble the rest of the number
    restOfString = numberToEnglish(numLeft);
    if (restOfString !== 'zero') {
      output += ' ' + restOfString;
    }
  }

  return output;
};
