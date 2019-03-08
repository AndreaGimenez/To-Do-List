//el tag "ul" existe antes que los "li" que agrego y ademas
//los contiene a todos.
//el parametro "li" inpmlica que el evento registra a los "li" dentro de "ul"
$("ul").on("click", "li", function(){
  $(this).toggleClass("task-completed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
  if(event.which === 13){ //13 es la tecla enter
    var text = $(this).val();
    //erase the input text
    $(this).val("");
    //append adds an html string
    $("ul").append("<li><span>X </span>" + text + "</li>");
  }
})
