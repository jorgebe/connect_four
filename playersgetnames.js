var playersGetNames = function () {

	console.log('gridSizeSelect function invoked.');

	var playerAGetName = function () {

		console.log('playerAGetName function invoked.');

		$('#text-display').html('What\'s your name?<p style="font-size: 10px"></p>');

		var playerANameInput = $('<input>').attr('class', 'input-texttype').attr('style', 'width: 150px');
		$('#controllers').append(playerANameInput);

		var playerANameButton = $('<input>').attr('type', 'button').attr('value', 'OK').attr('class', 'button');
		$('#controllers').append(playerANameButton);

		$(playerANameButton).on('click', function () {
			if (playerANameInput.val() === '') {
				game.playerAName = 'Player A';
			} else {
				game.playerAName = playerANameInput.val();
			}
			// clear #text-display div and #controllers div after name of player A is entered and saved
			$('#text-display').empty();
			$('#controllers').empty();
			console.log('game.playerAName saved as: ' + playerANameInput.val());
			playerBGetName();
		});
	}

	var playerBGetName = function () {

		console.log('playerBGetName function invoked.');


		$('#text-display').html('And you, next to ' + game.playerAName + ', what\'s your name?<p style="font-size: 10px"></p>');

		var playerBNameInput = $('<input>').attr('class', 'input-texttype').attr('style', 'width: 150px');
		$('#controllers').append(playerBNameInput);

		var playerBNameButton = $('<input>').attr('type', 'button').attr('value', 'OK').attr('class', 'button');
		$('#controllers').append(playerBNameButton);

		$(playerBNameButton).on('click', function () {
			if (playerBNameInput.val() === '') {
				game.playerBName = 'Player B';
			} else {
				game.playerBName = playerBNameInput.val();
			}
			console.log('game.playerBName saved as: ' + playerBNameInput.val());
			// clear #text-display div and #controllers div after name of player B is entered and saved
			$('#text-display').empty();
			$('#controllers').empty();
			playerTurnsMsg();
		});
	}

	var playerTurnsMsg = function () {

		console.log('playerTurnsMsg function invoked.');

		$('#text-display').html(game.playerAName + ', you are red and you go first.<p style="font-size: 0px"></p>' + game.playerBName + ', you are yellow and you go second.<p style="font-size: 10px"></p>');

		var playerTurnsMsgButton = $('<input>').attr('type', 'button').attr('value', 'OK').attr('class', 'button');
		$('#controllers').append(playerTurnsMsgButton);

		$(playerTurnsMsgButton).on('click', function () {
			$('#text-display').html(game.playerAName + ', your turn.');
			$('#controllers').empty();
			$('#grid').show();
			console.log('Dashboard hidden; text display emptied; controllers emptied; grid shown.');
			gameflow();
		});
	}

	playerAGetName();
}