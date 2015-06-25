$(function() {
	console.log('Loaded.');
	bootGame();
	gameOn();
});

var bootGame = function () {

	$('.location').addClass('empty');

}

var gameOn = function () {

	// var playerRed = prompt("Hello! What's your name?");

	// var playerBlack = prompt("And you, next to " + playerRed + ", what's your name?");

	// alert("Great!\n" + playerRed + ", you are the red chips.\n" + playerBlack + ", you are the black chips.");

	// alert("The game is on!\n" + playerRed + ", you go first.");

	numOfRows = 6;

	numOfColumns = 7;

	board = [];


	var Chip = function (rowPosition, columnPosition) {
		this.id = 'r' + rowPosition + 'c' + columnPosition;
		this.rowPos = rowPosition;
		this.colPos = columnPosition;
		this.value = "vacant";

		this.isVacant = function () {
			if (this.value === vacant) {
				return true
			}
		};

		this.toRed = function () {
			this.value = "red";
		};
	
		this.toBlack = function () {
			this.value = "black"
		}

		this.toVacant = function () {
			this.value = "vacant"
		}
	}	


	var buildRowsAndColumns = function (howManyRows, howManyColumns) {

		for (var i = 0; i < howManyRows ; i++) {
			board.push([]);
			$('#board').append( $('<div>').addClass('row') );
			
			for (var j = 0; j < howManyColumns; j++) {
				var rowClass = 'r-' + (i + 1);
				var columnClass = 'c-' + (j + 1);
				board[i].push( new Chip(i + 1, j + 1) );
				$('.row').eq(i).append( $('<div>').addClass(rowClass).addClass(columnClass).addClass('chip') );

			}
		}

	}

	buildRowsAndColumns(numOfRows,numOfColumns);
}

