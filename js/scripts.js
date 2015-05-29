var wordReplacer = function(sentence, oldWord, newWord) {
  var arrayCounter = 0;
  var commaTracker = [];
  var periodTracker = [];
  var colonTracker = [];

  sentence.split(" ").forEach(function(word) {
    word.split("").forEach(function(letter) {
      if (letter === ",") {
        commaTracker.push(arrayCounter);
      } else if (letter === ".") {
        periodTracker.push(arrayCounter);
      } else if (letter === ":") {
        colonTracker.push(arrayCounter);
      }
    })
    arrayCounter += 1;
  })

  sentence = sentence.replace(/[,:.]/g, "");

  var prePuncArray = [];
  sentence.split(" ").forEach(function(word) {
    if (word.toLowerCase() === oldWord.toLowerCase()) {
      if (newWord != "") {
        prePuncArray.push(newWord);
      }
    } else {
      prePuncArray.push(word)
    }
  })


  var finalArray = []
  var arrayCounter2 = 0;
  prePuncArray.forEach(function(word) {
    if (commaTracker.indexOf(arrayCounter2) > -1) {
      finalArray.push(word.concat(","));
    } else if (periodTracker.indexOf(arrayCounter2) > -1) {
      finalArray.push(word.concat("."));
    } else if (colonTracker.indexOf(arrayCounter2) > -1)  {
      finalArray.push(word.concat(":"));
    } else {
      finalArray.push(word);
    }
    arrayCounter2 += 1;
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

    $(".newSentence").show();

    event.preventDefault();
  })
})
