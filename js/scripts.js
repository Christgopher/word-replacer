

$(function() {

  $("form#sentence").submit(function(event) {
    var sentence = $("input#sentence").val();
    var result = wordOrder(sentence).reverse();
    result.forEach(function(property) {
      $(".counts").prepend("<li>" + property + "</li>")
    });


    event.preventDefault();
  });
});
