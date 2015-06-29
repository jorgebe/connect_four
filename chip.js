var Chip = function (rowPosition, columnPosition) {
		
	this.rowPos = 'row_' + rowPosition;
	
	this.colPos = 'col_' + columnPosition;
	
	this.position = 'row_' + rowPosition + '-' + 'col_' + columnPosition;

	this.value = 'vacant';

	this.isVacant = function () {
		if (this.value === 'vacant') {
			return true
		}
	};

	this.toRed = function () {
		this.value = 'red';
	};

	this.toYellow = function () {
		this.value = 'yellow'
	}
}