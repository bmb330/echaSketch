$(document).ready(function() {
	var rows = 32;
	var colms = 32;

	for (var i = 0; i < rows; i++) {
		var row = $("#container").append('<div class="row"></div>');
		$(row).width(colms*10);

		for (var j = 0; j < colms; j++) {
			$(row).append('<div class="cell"></div>');
		}
	}

	$(".cell").mouseover(function() {
		if ($(this).hasClass('darkerOne')) {
			$(this).addClass('darkerTwo');
			$(this).removeClass('darkerOne');
		}
		else if ($(this).hasClass('darkerTwo')) {
			$(this).addClass('darkerThree');
			$(this).removeClass('darkerTwo');
		}
		else if ($(this).hasClass('darkerThree')) {
			$(this).addClass('darkerFour');
			$(this).removeClass('darkerThree');
		}
		else if ($(this).hasClass('darkerFour')) {
			;
		}
		else {
			$(this).addClass('darkerOne');
		}
	});
});


function resetGrid() {
		$(".cell").removeClass('darkerOne darkerTwo darkerThree darkerFour');
}