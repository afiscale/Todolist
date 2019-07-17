// Check Off Specific Todos by Clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")

});

//deletes li when span is clicked, stops other events from happening
$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});


//adds text entered into input to a new li
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		//create a new li add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
})


//toggles input box when clicked
$(".fa-plus").click(function(){

	$("input[type='text']").fadeToggle()

})