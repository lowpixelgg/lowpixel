Responsive = {};


local function reMap(x, in_min, in_max, out_min, out_max)
	return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
end

responsiveMultipler = reMap(scw, 1024, 1920, 0.75, 1);

function Responsive:getScaleFactor()
	return responsiveMultipler;
end