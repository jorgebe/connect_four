var gridSizeSelect = function () {

	console.log('gridSizeSelect function invoked.');

	// hide the <div> containing the NEW GAME button from the text display
	newGameButtonDiv = $('#newgame-button-div');
	$(newGameButtonDiv).hide();

	// create a <select> tag that will display a drop-down menu of options
	var gridSizeSelector = $('<select>').attr('id', 'gridsize-selector').attr('class', 'selector');
	// append it to the grid size <form>
	$('#controllers').append(gridSizeSelector);

	// create an <option> tag for each grid size option
	var gridSize6r7c = $('<option>').attr('id', 'size6r7c').attr('value', 'size6r7c').html('6 rows &#215 7 columns');
	var gridSize7r8c = $('<option>').attr('id', 'size7r8c').attr('value', 'size7r8c').html('7 rows &#215 8 columns');
	var gridSize7r10c = $('<option>').attr('id', 'size7r10c').attr('value', 'size7r10c').html('7 rows &#215 10 columns');
	// append the options to the grid size <selector>
	$(gridSizeSelector).append(gridSize6r7c).append(gridSize7r8c).append(gridSize7r10c);

	// create an <input> in the of the button type that will submit the user's choice
	var gridSizeSumbitButton = $('<input>').attr('type', 'button').attr('id', 'gridsize-button').attr('class', 'button').attr('value', 'OK');
	// append it to the dashboard
	$('#controllers').append(gridSizeSumbitButton);

	// add an on-click event that will call the function that will set the values for the game grid
	$('#gridsize-button').on('click', gridSizeSet);
}