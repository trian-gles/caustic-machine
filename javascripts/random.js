inlets = 1;
outlets = 1;

function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

function msg_float(f) {
	let args = Array.from(jsarguments);
	let low = args[1];
	let high = args[2];
	let center = f;
	if (f < -10)
	{
		center = -10;
		high = 8; 
	}
	outlet(0, distributed_choice(center, low, high));
}

function distributed_choice(center, low, high)
{
	let rand = low - 1;
	while (rand < low || rand > high)
	{
		rand = ((randn_bm() - 0.5) * 10) + center;
	}
	return rand;
}

function list()
{
	let args = Array.from(arguments);
	let bounds = [args[1], args[2]];
	let rand = randn_bm() * (bounds[1] - bounds[0]) + bounds[0];
	outlet(0, rand);
}