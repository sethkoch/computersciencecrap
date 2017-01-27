var telephoneWords = function(digitString) {
  // Save the current words through closure scope
  var words = [];

  var lettersForDigits = function (word, digits) {
    if (digits.length === 0) {
      words.push(word);
      return;
    }

    var remainDigits = digits.slice(1);
    phoneDigitsToLetters[digits[0]].split('')
      .forEach(function(letter) {
        lettersForDigits(word + letter, remainDigits);
      });

  };

  lettersForDigits('', digitString.split(''));
  return words;
};

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};