// Calls
$("input").on("click", setToDo);
// the click function works only on tags that exist when page loaded
// on click works also with the new tags we add durring the code
// but we must add the listener to the parents element instead of the child
// and we add the event selected as second argument to on();
$("ul").on("click", "li", done);
$("ul").on("click", "span", remove);
$(".sort").on("click", hide);

/************* FUNCTIONS *************/
// verify what input text value is
// after a user type an enter key
function setToDo() {
  $(this).keypress((event) => {
    if (event.which === 13 && $(this).val().trim()) {
      $("ul").append(
        "<li><span><i class='trash alternate outline icon'></i></span>" +
          $(this).val() +
          "</li>"
      );
      $(this).val("");
    }
  });
}
function done() {
  $(this).toggleClass("done");
}
function remove(event) {
  $(this).parent().remove();
  event.stopPropagation();
}
function hide() {
  $(this).toggleClass("up");
  $(this).toggleClass("down");
  $("input[type=text]").fadeToggle();
}
