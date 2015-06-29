var gameOver = {

	isOver: false,

	overMessage: function () {
		console.log('Play again?');
	},

	winnerIsRed: function () {
		this.isOver = true;
		$('.chip').unbind('click');
		$('#text-display').html('Game over. ' + game.playerAName + ' wins.');
		(newGameButtonDiv).show();
		$('#text-display').append(newGameButtonDiv);

		$('#newgame-button').click( function() {
			game.reset()
			gridSizeSelect();
		});

		console.log('Game over. ' + game.playerAName + ' wins.');
	},

	winnerIsYellow: function () {
		this.isOver = true;
		$('.chip').unbind('click');
		$('#text-display').html('Game over. ' + game.playerBName + ' wins.');
		(newGameButtonDiv).show();
		$('#text-display').append(newGameButtonDiv);

		$('#newgame-button').click( function() {
			game.reset()
			gridSizeSelect();
		});
		
		console.log('Game over. ' + game.playerBName + ' wins.');
	},

	checkForWin: function () {

		console.log('gameOver.checkForWin function invoked.');

		for (var i = 0; i < winningCombos.allCombos.length; i++) {

			counterRedChips = 0;
			counterYellowChips = 0;

			for (var j = 0; j < winningCombos.allCombos[i].length; j++) {

				if (winningCombos.allCombos[i][j].value === 'red') {

					counterRedChips++;
				}

				if (winningCombos.allCombos[i][j].value === 'yellow') {

					counterYellowChips++;
				}

				if (counterRedChips === 4) {

					this.winnerIsRed();
				}

				if (counterYellowChips === 4) {

					this.winnerIsYellow();
				}
			}
		}
	}
}