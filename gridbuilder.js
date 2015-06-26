var gridBuilder = function (howManyRows, howManyColumns) {

	console.log('gridBuilder function invoked.');

	// clear the grid in both the javascript and the DOM document's html
	game.grid = [];
	$('#grid').empty();

	// hide the #grid div, which will contain the visual grid
	// so that we can't see it at all in the process of buiding the grid
	$('#grid').hide();

	for (var i = 0; i < howManyRows; i++) {
		
		game.grid.push([]);
		$('#grid').append( $('<div>').attr('class', 'row') );
			
		for (var j = 0; j < howManyColumns; j++) {
			
			var row = (i + 1);
			var column = (j + 1);

			var rowClass = 'r' + row;
			var columnClass = 'c' + column;

			game.grid[i].push( new Chip(row, column) );
			$('.row').eq(i).append( $('<div>').addClass('chip').addClass(rowClass).addClass(columnClass) );
		}
	}
	// after building our grid for javascript and for html (the latter still hidden),
	// invoke the gameFlow function
	playersGetNames();
}