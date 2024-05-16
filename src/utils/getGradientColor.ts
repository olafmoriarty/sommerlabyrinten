const getGradientColor = ( color1 : string, color2 : string, fraction : number ) => {
	const r1 = parseInt(color1.substring(1, 3));
	const r2 = parseInt(color2.substring(1, 3));

	return (r1 + r2) * fraction;
}

export default getGradientColor;