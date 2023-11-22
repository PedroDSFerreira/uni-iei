//PEDRO DUARTE SOARES FERREIRA
//NMEC: 98620

const BACK_COLOUR ='#e1e1e1';
let WIDTH;
let HEIGHT;
let SPEED = 50;
let data;



function setup() {
	noLoop()
	WIDTH = floor(windowWidth*0.46);
	HEIGHT = floor(windowHeight*0.5);
	canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent('canvasHTML');
	background(BACK_COLOUR);
	data = new Data(WIDTH,HEIGHT);
	draw();
	display(data);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function draw() {
	SPEED = document.getElementById("speed").value
}


async function swap(arr,xp, yp) {
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}
