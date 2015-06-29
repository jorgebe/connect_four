var winningCombos = {

	combos: [],

	allWinningCombos: [],

	// combosHorizontal: [],

	// combosVertical: [],

	// combosDiagonalTLBR: [],

	// combosDiagonalTRBL: [],

	getCombos: function () {

		this.getHorizontalCombos();
		this.getVerticalCombos();
		this.getDiagonalTopLeftToBottomRightCombos();
		this.getDiagonalTopRightToBottomLeftCombos();
	},

	getHorizontalCombos: function () {

		// go through each row
		for (var i = 0; i < game.grid.length; i++) {

			// console.log('Row is:');
			// console.log(game.grid[i]);

			// inside each row,
			for (var j = 0; j < game.grid[i].length; j++) {

				// slice every four consecutive positions into an array
				var horizontalCombo = game.grid[i].slice(j, j + 4);

				// if the array contains exactly four elements
				// and does not contain undefined elements
				if ((horizontalCombo.length === 4) 
					&& (horizontalCombo.indexOf(undefined) === -1)) {

					// add this array as a winning combination in combosHorizontal
					// this.combosHorizontal.push(horizontalCombo);

					// add this array as a winning combination in allWinningCombos
					this.allWinningCombos.push(horizontalCombo);

					console.log('Horizontal combo added:');
					console.log(horizontalCombo);
				}
			}
		}
	},

	getVerticalCombos: function () {

		// get number of columns
		var numOfColumns = game.grid[0].length;		

		// declare an empty array that will contain
		// the grid positions found in that column
		var column = [];

		// go through the number of columns, 
		// where the first column takes the index 0
		// so as to match each column to its array index
		for (var i = 0; i < numOfColumns; i++) {

			// inside each row of the column called by the index i,
			for (var j = 0; j < game.grid.length; j++) {
				// there's a grid position which gets added (pushed)
				// to the column array
				column.push(game.grid[j][i]);
			}

			// console.log('Column is:')
			// console.log(column);

			// after obtining all the positions in each column,
			// slice every four consecutive positions into an array
			for (var k = 0; k < column.length; k++) {

				var verticalCombo = column.slice(k, k + 4);

				// if the array contains exactly four elements
				// and does not contain undefined elements
				if ((verticalCombo.length === 4) 
					&& (verticalCombo.indexOf(undefined) === -1)) {

					// add this array as a winning combination in combosHorizontal
					// this.combosVertical.push(verticalCombo);

					// add this array as a winning combination in allWinningCombos
					this.allWinningCombos.push(verticalCombo);

					console.log('Vertical combo added:');
					console.log(verticalCombo);
				}
			}
		// empty the column
		column = [];
		}	
	},

	getDiagonalTopLeftToBottomRightCombos: function () {
		
		// declare an empty array that will contain
		// the grid positions found in that diagonal
		var diagonal = [];

		// go through each row from top to bottom
		for (var a = 0; a < game.grid.length; a++) {

			// inside each row, go through each column from left to right
			for (var b = 0; b < game.grid[a].length; b++) {

				// the two loops above are for landing at the starting position
				// (top-left corner) to then go from there

				// the two loops below are for creating the diagonals

				// go through each row from top to bottom
				for (var i = 0; i < game.grid.length; i++) {

					// while simultaneously, on another count,
					// go through each row from top to bottom
					// in synchrony with the indices of the first count
					for (var j = i; j < game.grid.length; j++) {

						// the index of each item on the row from the first count (i)
						// matches the index of each item on the row from the second count (j)

						// by taking the index from the first count (i) to represent a row
						// and the index from the secound count (j) to represent a column,
						// a position on the grid can be obtained

						if (game.grid[i + a] !== undefined) {
						// the condition above is needed because 
						// otherwise the loop will eventually 
						// encounter game.grid[i + a] as undefined

						// add (push) that grid position to the diagonal array
						
							diagonal.push(game.grid[i + a][j + b]);

							// to jump to the position
							// one column to the right and one row down, 
							// add 1 to i, so that in the next loop, 
							// when jumping to the column on the right,
							// it will also jump to next row down;
							// this is what will happen: j = (i + 1) + 1		

							i++;
						}
					}
						
					// console.log('Top-left to bottom-right diagonal is:');
					// console.log(diagonal);
					
					// after obtining all the positions in each diagonal,
					// slice every four consecutive positions into an array
					for (var k = 0; k < diagonal.length; k++) {	

						var diagonalCombo = diagonal.slice(k, k + 4);

						// if the array contains exactly four elements
						// and does not contain undefined elements
						if ((diagonalCombo.length === 4) 
							&& (diagonalCombo.indexOf(undefined) === -1)) {

							// add this array as a winning combination in combosDiagonalTLBR
							this.combosDiagonalTLBR.push(diagonalCombo);

							// add this array as a winning combination in allWinningCombos
							this.allWinningCombos.push(diagonalCombo);
						}

						if (diagonalCombo === this.allWinningCombos[this.allWinningCombos.length - 1]) {	
							console.log('Diagonal (TL-BR) combo added:');
							console.log(this.allWinningCombos[this.allWinningCombos.length - 1]);
						}
					}
				// empty the diagonal array	
				diagonal = [];
				}
			}
		}		
	},

	getDiagonalTopRightToBottomLeftCombos: function () {
		
		// declare an empty array that will contain
		// the grid positions found in that diagonal
		var diagonal = [];

		// go through each row from top to bottom
		for (var a = 0; a < game.grid.length; a++) {

			// inside each row, go through each column from right to left
			for (var b = game.grid[a].length - 1; b >= 0; b--) {

				// the two loops above are for landing at the starting position
				// (top-right corner) to then go from there

				// the two loops below are for creating the diagonals

				// go through each row from top to bottom
				for (var i = 0; i < game.grid.length; i++) {

					// while simultaneously, on another count,
					// go through each row from top to bottom
					// in synchrony with the indices of the first count
					for (var j = i; j < game.grid.length; j++) {

						// the index of each item on the row from the first count (i)
						// matches the index of each item on the row from the second count (j)

						// by taking the index from the first count (i) to represent a row
						// and the index from the secound count (j) to represent a column,
						// a position on the grid can be obtained

						if (game.grid[i + a] !== undefined) {

						// add (push) that grid position to the diagonal array
						
							diagonal.push(game.grid[i + a][b - j]);

							// to jump to the position
							// one column to the left and one row down, 
							// add 1 to i, so that in the next loop, 
							// when jumping to the column on the left,
							// it will also jump to next row down;
							// this is what will happen: j = (i + 1) + 1	

							i++;
						}
					}
						
					// console.log('Top-right to bottom-left diagonal is:');
					// console.log(diagonal);

					// after obtining all the positions in each diagonal,
					// slice every four consecutive positions into an array
					for (var k = 0; k < diagonal.length; k++) {	

						var diagonalCombo = diagonal.slice(k, k + 4);

						// if the array contains exactly four elements
						// and does not contain undefined elements
						if ((diagonalCombo.length === 4) 
							&& (diagonalCombo.indexOf(undefined) === -1)) {

							// add this array as a winning combination in combosDiagonalTRBL
							// this.combosDiagonalTRBL.push(diagonalCombo);

							// add this array as a winning combination in allWinningCombos
							this.allWinningCombos.push(diagonalCombo);
						}

						if (diagonalCombo === this.combos[this.allWinningCombos.length - 1]) {	
							console.log('Diagonal (TR-BL) combo added:');
							console.log(this.allWinningCombos[this.allWinningCombos.length - 1]);
						}
					}
				// empty the diagonal array	
				diagonal = [];			
				}
			}
		}		
	},	
}