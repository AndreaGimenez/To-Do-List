$("li").click(function(){
  $(this).toggleClass("task-completed");
});

$("span").click(function(event){
  $(this).parent().fadeOut(1000, function(){
    $(this).remove();
  });
  event.stopPropagation();
});
