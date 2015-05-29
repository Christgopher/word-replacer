var wordReplacer = function(sentence, oldWord, newWord) {
  var prePuncArray = [];
  var arrayCounter = 0;
  var commaTracker = [];
  var periodTracker = [];
  var colonTracker = [];

  var finalArray = []
  sentence.split(" ").forEach(function(word) {
    word.split("").forEach(function(letter) {
      if (letter === ",") {
        commaTracker.push(arrayCounter);
      } else if (letter === ".") {
        periodTracker.push(arrayCounter);
      } else if (letter === ":") {
        colonTracker.push(arrayCounter)
      }
    })
    arrayCounter += 1;
  })

  sentence = sentence.replace(/[,:.]/g, "");


  sentence.split(" ").forEach(function(word) {
    if (word != oldWord) {
      prePuncArray.push(word);
    } else {
      if (newWord != "") {
        prePuncArray.push(newWord);
      }
    }
  })
  var arrayCounter2 = 0;
  prePuncArray.forEach(function(word) {
    if (commaTracker.indexOf(arrayCounter2) > -1) {
      finalArray.push(word.concat(","))
    } else if (periodTracker.indexOf(arrayCounter2) > -1) {
      finalArray.push(word.concat("."));
    } else if (colonTracker.indexOf(arrayCounter2) > -1)  {
      finalArray.push(word.concat(":"));
    } else {
      finalArray.push(word)
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

    event.preventDefault();
  })
})
