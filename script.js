var game = {

	playerRedName: '',
	playerBlackName: '',

	numOfRows: 6,
	numOfColumns: 7,

	grid: [],

	reset: function () {

		this.playerRedName = '';
		this.playerBlackName = '';

		this.numOfRows = 6;
		this.numOfColumns = 7;

		this.grid = [];
		$('#grid').empty();

		$('#text-display').empty();

		// remove all the items inside the controllers section of the dashboard
		// except the fist one, which is the div containing the NEW GAME button
		for (var i = 1; i < $('#controllers').children().length; i++) {
			$('#controllers').eq(i).remove()
		}
	}
}