var turns = {

	turnPlayerA: function () {
		console.log('turns.turnPlayerA function invoked.');
		$('.chip').unbind('click');
		$('.chip').on('click', turns.dropChipPlayerA);
	},

	turnPlayerB: function () {
		console.log('turns.turnPlayerB function invoked.');
		$('.chip').unbind('click');
		$('.chip').on('click', turns.dropChipPlayerB);
	},

	dropChipPlayerA: function () {

		console.log('turns.dropChipPlayerA function invoked.')

		// get the html class(es) of the chip clicked,
		// but since in html, multiple classes of one element
		// all appear inside the class=" " property separated only by spaces,
		// which javascript would interpret as a string;
		// split this string into an array of strings
		// by assigning a single blank space as the separator
		var classesOfClickedChip = this.className.split(' ');

		console.log('The classes of the clicked chip are: ' + classesOfClickedChip);

		// declare a variable (empty for now) that will store the name
		// of the class pertaining to clicked chip's column
		var classOfClickedChipReColumn = '';

		// get the class that pertains only to the column the chip is in
		for (var i = 0; i < classesOfClickedChip.length; i++) {
			// get the first four characters of each of the html classes of the chip
			var firstFourLettersOfClass = classesOfClickedChip[i].slice(0, 4);

			if (firstFourLettersOfClass === 'col_') {
				// change the classOfClickedChipReColumn string to be equal
				// to the name of the class pertaining to clicked chip's column
				classOfClickedChipReColumn = classesOfClickedChip[i];
				console.log('The clicked chip\'s class pertaining to its column is: ' + classOfClickedChipReColumn);
			}
		};

		var columnClicked = parseInt(classOfClickedChipReColumn.slice(4));
		console.log('The number of the column clicked is: ' + columnClicked);

		console.log('The elements with the class name ' + classOfClickedChipReColumn + ' are the following (logged in the next entry of the console):');
		// console.log( $('.' + classOfClickedChipReColumn) );

		// in the javascript grid go through the rows from bottom to top, 
		// aka index (number of colums - 1) from last to first
		for (var i = game.grid.length - 1; i >= 0; i--) {

			// but only check in the column aka index (columnClicked - 1) clicked on,
			if (game.grid[i][columnClicked - 1].value === 'vacant') {

				console.log('Checking if position in row ' + (i + 1) + ', column ' + columnClicked + ', is vacant.');
				
				// turn it red in the javascript grid
				game.grid[i][columnClicked - 1].toRed();

				// and turn it red on the page
				$('.' + classOfClickedChipReColumn).eq(i).addClass('chip-red');

				turns.turnPlayerB();

				break;
			
			} else {
				// if there are no vacant positions in that column,
				// invoke the function that allows this same player to drop a chip
				turns.turnPlayerA()
			}
		}
	},

	dropChipPlayerB: function () {

		console.log('turns.dropChipPlayerB function invoked.')

		// get the html class(es) of the chip clicked,
		// but since in html, multiple classes of one element
		// all appear inside the class=" " property separated only by spaces,
		// which javascript would interpret as a string;
		// split this string into an array of strings
		// by assigning a single blank space as the separator
		var classesOfClickedChip = this.className.split(' ');

		console.log('The classes of the clicked chip are: ' + classesOfClickedChip);

		// declare a variable (empty for now) that will store the name
		// of the class pertaining to clicked chip's column
		var classOfClickedChipReColumn = '';

		// get the class that pertains only to the column the chip is in
		for (var i = 0; i < classesOfClickedChip.length; i++) {
			// get the first four characters of each of the html classes of the chip
			var firstFourLettersOfClass = classesOfClickedChip[i].slice(0, 4);

			if (firstFourLettersOfClass === 'col_') {
				// change the classOfClickedChipReColumn string to be equal
				// to the name of the class pertaining to clicked chip's column
				classOfClickedChipReColumn = classesOfClickedChip[i];
				console.log('The clicked chip\'s class pertaining to its column is: ' + classOfClickedChipReColumn);
			}
		};

		var columnClicked = parseInt(classOfClickedChipReColumn.slice(4));
		console.log('The number of the column clicked is: ' + columnClicked);

		console.log('The elements with the class name ' + classOfClickedChipReColumn + ' are the following (logged in the next entry of the console):');
		// console.log( $('.' + classOfClickedChipReColumn) );

		// in the javascript grid go through the rows from bottom to top, 
		// aka index (number of colums - 1) from last to first
		for (var i = game.grid.length - 1; i >= 0; i--) {

			// but only check in the column aka index (columnClicked - 1) clicked on,
			if (game.grid[i][columnClicked - 1].value === 'vacant') {

				console.log('Checking if position in row ' + (i + 1) + ', column ' + columnClicked + ', is vacant.');
				
				// turn it red in the javascript grid
				game.grid[i][columnClicked - 1].toYellow();

				// and turn it red on the page
				$('.' + classOfClickedChipReColumn).eq(i).addClass('chip-yellow');

				turns.turnPlayerA();

				break;
			
			} else {
				// if there are no vacant positions in that column,
				// invoke the function that allows this same player to drop a chip
				turns.turnPlayerB()
			}
		}
	},
}