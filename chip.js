var Chip = function (rowPosition, columnPosition) {
		
	this.rowPos = rowPosition;
	this.colPos = columnPosition;
	this.value = "vacant";

	this.isVacant = function () {
		if (this.value === "vacant") {
			return true
		}
	};

	this.toRed = function () {
		this.value = "red";
	};

	this.toYellow = function () {
		this.value = "yellow"
	}
}