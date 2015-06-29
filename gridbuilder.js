var gridBuilder = function (howManyRows, howManyColumns) {

	console.log('gridBuilder function invoked.');

	// clear the grid in javascript and the #grid-area div on the page
	game.grid = [];
	$('#grid-area').empty();

	// hide the #grid-area div, which will contain a div with the id #grid,
	// inside of which the visual grid will be built;
	// this, so that we can't see #gird as it is being built
	$('#grid-area').hide();

	// append a #grid div to #grid-area, which is where the visual grid will live
	$('#grid-area').append( $('<div>').attr('id', 'grid') );

	// build the actual visual grid in both the javascript and on the page
	for (var i = 0; i < howManyRows; i++) {
		// in javascript
		game.grid.push([]);
		// on the page
		$('#grid').append( $('<div>').attr('class', 'row') );
			
		for (var j = 0; j < howManyColumns; j++) {
			
			var row = (i + 1);
			var column = (j + 1);

			var rowClass = 'row_' + row;
			var columnClass = 'col_' + column;

			// in javascript
			game.grid[i].push( new Chip(row, column) );
			// on the page
			$('.row').eq(i).append( $('<div>').addClass('chip').addClass(rowClass).addClass(columnClass) );
		}
	}

	// obtain the winning combinations
	winningCombos.getCombos();

	// after building our grid in the javascript and on the page (the latter still hidden),
	// invoke the playersGetNames function
	playersGetNames();
}