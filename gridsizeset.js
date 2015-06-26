var gridSizeSet = function () {

	console.log('Grid size selected: ' + $('#gridsize-selector').val());
	console.log('gridSizeSet function invoked.');

	// set the conditions that will change the number of columns and rows according to the user's choice
	if ( $('#gridsize-selector').val() === 'size6r7c' ) {
		game.numOfRows = 6;
		game.numOfColumns = 7;
	} else if ( $('#gridsize-selector').val() === 'size7r8c' ) {
		game.numOfRows = 7;
		game.numOfColumns = 8;
	} else if ( $('#gridsize-selector').val() === 'size7r10c' ) {
		game.numOfRows = 7;
		game.numOfColumns = 10;
	}

	// remove the grid size selector and its buttons from the controllers area of the dashboard
	$('#gridsize-selector').remove();
	$('#gridsize-button').remove()

	console.log('Grid size is now: r' + game.numOfColumns + ' c' + game.numOfRows);

	// invoke the function that builds the grid passing the the values chosen
	// for number of rows and number of columns
	gridBuilder(game.numOfRows, game.numOfColumns);
}