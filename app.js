// this app.js file should be the last .js file to load

$(function() {
	console.log('Connect Four loaded.');

	game.reset();

	$('#newgame-button').click(gridSizeSelect);

});