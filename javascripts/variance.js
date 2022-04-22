inlets = 1;
outlets = 1;


var maxLength = 10;
var circular = new Array();
var head = 0;
var sum = 0;

var full = false;
function bang() {
	if (full)
	{
		let mean = sum / maxLength;
		let variance = circular.reduce((prevVal, curVal) => prevVal + Math.pow(curVal - mean, 2), 0) / maxLength;
		outlet(0, variance);
	}
}

function advance_head() {
	head = (head + 1) % maxLength;
}

function msg_float(f) {
	if (circular.length < maxLength)
	{
		circular.push(f);
		sum += f;
		advance_head();
	}
	else
	{
		full = true;
		sum -= circular[head];
		sum += f;
		circular[head] = f;
		advance_head();
		bang();
	}
}