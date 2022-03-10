module.exports = {
	name: 'itc',
	async execute({ input }) {
		//not even gonna fix
		if (input === "") return ":x: Syntax Error! Syntax: j.itc <text>"
		let feet, inch;
		if (input.includes('\'')) {
			let bothU = imp.split('\'');
			feet = bothU[0];
			feet = Number(feet);
			inch = bothU[1];
			inch = inch.replace(/\"/g, '');
			inch = Number(inch);
		} else {
			feet = 0
			inch = imp
			inch = imp.replace(/\"/g, '')
			inch = Number(inch)
		}
		const ftinchfinal = (feet * 30.48) + (inch * 2.54)
		return `:straight_ruler: ${ftinchfinal}cm`;
	}
}