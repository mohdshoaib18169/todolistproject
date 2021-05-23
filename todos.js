$("ul").on("click","li",function(){
$(this).toggleClass("line");
console.log($(this).val)
});
$("ul").on("click","span",function(){
console.log($(this).val)
	$(this).parent().fadeOut(50,function(){
		$(this).remove();
		"event.stopPropagation();"
			
	});



});
$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
		var add=$(this).val();
		$(this).val("");
	$("ul").append("<li><span> <i class='fa fa-trash' aria-hidden='true'></i></span> " + add +    "</li>");}
});
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});