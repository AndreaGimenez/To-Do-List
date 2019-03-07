$("li").click(function(){
  $(this).toggleClass("task-completed");
});

$("span").click(function(event){
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
    $("ul").append("<li>" + text + "</li>");
  }
})
