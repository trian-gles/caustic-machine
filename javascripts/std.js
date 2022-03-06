inlets = 1;
outlets = 2;

var data_points = [];


function msg_float(f) {
	data_points.push(f);
}

function _mean()
{
	let mean = 0;
	
	for (let i = 0; i < data_points.length; i++)
	{
		mean += data_points[i];
	}
	return mean / data_points.length;
}

function _std()
{
	let m = _mean();
	let sigma = 0;
	
	for (let i = 0; i < data_points.length; i++)
	{
		sigma += Math.pow(data_points[i] - m, 2);
	}
	let variance = sigma / (data_points.length - 1);
	return Math.pow(variance, 0.5);
}

function bang()
{
	outlet(0, _std());
	outlet(1, _mean());
}



function reset()
{
	data_points = [];
	post("Resetting data points");
}