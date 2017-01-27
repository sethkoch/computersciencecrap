// All Anagrams
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

// Examples
// Input Output
// string:
// "abc" [ "abc", "acb", "bac", "bca", "cab", "cba" ]

var allAnagrams = function(string) {
  if (string.length === 0) { return ['']; }

  var result = {};
  // For each letter in string
  string.split('').forEach(function(letter, i) {
    var remainingLetters = string.slice(0, i) + string.slice(i + 1);
    // For each anagram of the remaining letters
    allAnagrams(remainingLetters).forEach(function(anagram) {
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
};

var maple = allAnagrams('abc');
maple;