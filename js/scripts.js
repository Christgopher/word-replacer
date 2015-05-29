var wordReplacer = function(sentence, oldWord, newWord) {
  var finalArray = [];
  sentence.split(" ").forEach(function(word) {
    if (word != oldWord) {
      finalArray.push(word);
    } else {
      if (newWord != "") {
        finalArray.push(newWord);
      }
    }
  })

  return finalArray.join(" ");
}
