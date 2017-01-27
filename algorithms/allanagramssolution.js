var allAnagrams = function(string) {
  var anagrams = {};
    var generator = function(text, options){
    if (text.length === string.length){
      anagrams[text] = true;
    }
    for (var i = 0; i < options.length; i++){
      generator(
        text + options[i],
        options.slice(0, i) + options.slice(i+1)
      );
    }
  };
  generator('', string);
  return Object.keys(anagrams);
};


var allAnagrams = function(string) {
  if (string.length === 0) { return ['']; }

  var result = {};

  string.split('').forEach(function(letter, i) {
    var remainingLetters = string.slice(0, i) + string.slice(i + 1);

    allAnagrams(remainingLetters).forEach(function(anagram) {
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
};