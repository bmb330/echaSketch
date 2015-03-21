$(document).ready(function() {
	var rows = 32;
	var colms = 32;

	for (var i = 0; i < rows; i++) {
		var row = $("#container").append('<div class="row"></div>');
		$(row).css("width", (colms*12)+"px");
		console.log(row);

		for (var j = 0; j < colms; j++) {
			$('#container > div:last').append('<div class="cell"></div>');
		}
	}
});