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

$(function() {

  $("form#sentence").submit(function(event) {
    var sentence = $("input#sentence").val();
    var oldWord = $("input#oldWord").val();
    var newWord = $("input#newWord").val();

    var result = wordReplacer(sentence, oldWord, newWord);

    $(".newSentence").text(result);

    event.preventDefault();
  })
})
