$(document).ready(function(){
	// Select color input
	const colorPicker = $("#colorPicker");
	const pixelCanvas = $("#pixelCanvas");
	// Select size input
	const height = $("#inputHeight");
	const width = $("#inputWeight");

	// When size is submitted by the user, call makeGrid()
	$('#submit').click(function(e){
		e.preventDefault();
		makeGrid();

	});

	//Making the grid
	function makeGrid () {
		for(var i = 0; i < height.val(); i++){
			pixelCanvas.append("<tr></tr>");
		}
		for(var i = 0; i < width.val(); i++){
			$("#pixelCanvas tr").append("<td></td>");
		}	

	}

	pixelCanvas.on("click","td", "tr", function () {
		const color = $("#colorPicker").val();
		$("tr").css("color");
		//if there is already color in it, remove it
		if($(this).attr("style")) {
			$(this).removeAttr("style");
		} else {
			$(this).attr("style", "background-color:" + color);
		}
	})
		 
 })

	

