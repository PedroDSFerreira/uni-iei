//PEDRO DUARTE SOARES FERREIRA
//NMEC: 98620

class Data {
	constructor(size, maxVal) {
		this.size = size;
		this.maxVal = maxVal;
		this.array = randomise(this.size, this.maxVal)
	}

	newArray(array) {
		this.array = array;
	}
}

// Generates random numbers less or equal to maxVal
function randomise(len, maxVal) {
	let val, x;
	array = new Array(len)
	for (x = 0; x < len; x++) {
		val = Math.floor(Math.random()*maxVal+1);
		array[x] = val
	}
	return array
}