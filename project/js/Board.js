//PEDRO DUARTE SOARES FERREIRA
//NMEC: 98620

async function display(data) {
	let x, num;
	background(BACK_COLOUR)
	for (x = 0; x < data.size; x++) {
		num = data.array[x];
		colour(x,num);
	}
	draw();

}


function colour(x,y) {
	line(x, HEIGHT, x, y);
}
