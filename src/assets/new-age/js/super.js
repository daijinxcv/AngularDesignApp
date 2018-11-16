function init() {
	colorize2();
	setInterval(colorize2, 125);
	colorize();
	setInterval(colorize, 125);
	console.log("Init Done");
}

var r = 255;
var g = 255;
var b = 255;
var a = 1;

var r1 = 37;
var g1 = 70;
var b1 = 137;

var reverseR1 = false, reverseG1 = false, reverseB1 = false;

var reverseR = false, reverseG = false, reverseB = false;

function colorize2() {
	var body = document.getElementById('katawan');
	body.style = "background: linear-gradient(to right, rgb("
			+ r1
			+ ","
			+ g1
			+ ","
			+ b1
			+ ")"
			+ ",rgb("
			+ r1
			+ ","
			+ g1
			+ ","
			+ b1
			+ ")" + ");";

	if (r1 >= 37 && !reverseR1) {
		reverseR1 = true;
	} else if (r1 <= 17 && reverseR1) {
		reverseR1 = false;
	}

	if (reverseR1)
		r1--;
	else
		r1++;

	if (g1 >= 106 && !reverseG1) {
		reverseG1 = true;
	} else if (g1 <= 93 && reverseG1) {
		reverseG1 = false;
	}

	if (reverseG1)
		g1--;
	else
		g1++;

	if (b1 >= 182 && !reverseB1) {
		reverseB1 = true;
	} else if (b1 <= 171 && reverseB1) {
		reverseB1 = false;
	}

	if (reverseB1)
		b1--;
	else
		b1++;
}

function colorize() {
	var obj = document.getElementById('mensahe');
	obj.style = "color:rgba(" + r + "," + g + "," + b + "," + a + ")";

	if (r > 185 && !reverseR) {
		reverseR = true;
	} else if (r <= 167 && reverseR) {
		reverseR = false;
	}

	if (reverseR)
		r--;
	else
		r++;

	if (g > 195 && !reverseG) {
		reverseG = true;
	} else if (g <= 102 && reverseG) {
		reverseG = false;
	}

	if (reverseG)
		g--;
	else
		g++;

	if (b > 22 && !reverseB) {
		reverseB = true;
	} else if (b <= 31 && reverseB) {
		reverseB = false;
	}

	if (reverseB)
		b--;
	else
		b++;
	a = 1;
}