module.exports = {
	name: 'vaporwave',
	async execute({ input }) {
		if (input === "") return ":x: S y n t a x  e r r o r !  S y n t a x :  j.vaporwave  < t e x t >\nTranslation: :x: Syntax Error! j.vaporwave <text>";
		return input.replace(/()/g, ' ');
	}
}