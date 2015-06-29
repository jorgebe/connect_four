var game = {

	playerAName: '',
	playerBName: '',

	// default number of rows and columns
	numOfRows: 6,
	numOfColumns: 7,

	grid: [],

	reset: function () {

		console.log('game.reset function invoked.');

		this.playerAName = '';
		this.playerBName = '';

		this.numOfRows = 6;
		this.numOfColumns = 7;

		// clear the grid in both the javascript and the DOM document's html
		this.grid = [];
		$('#grid').empty();

		$('#text-display').empty();

		// remove all the items inside the controllers section except the first, 
		// which is the div containing the NEW GAME button
		for (var i = 1; i < $('#controllers').children().length; i++) {
			$('#controllers').eq(i).remove()
		}
	}
}