inlets = 1;
outlets = 1;

function msg_float(f) {
	let args = Array.from(jsarguments);
	
	outlet(0, prob(args[0], f, args[1], args[2]));
}

function prob(low, mid, high, tight)
{
	let range, num, sign;
	
	range = ((high - mid) > (mid - low)) ? high - mid : mid - low;
	do {
		sign = (Math.random() > 0.5) ? 1 : -1;
		num = mid + sign * (Math.pow(Math.random(), tight) * range);
	} while(num < low || num > high);
	
	return num;
	
}