var wordReplacer = function(sentence, oldWord, newWord) {
  var finalArray = [];
  sentence.split(" ").forEach(function(word) {
    if (word != oldWord) {
      finalArray.push(word);
    }
  })

  return finalArray.join(" ");
}
