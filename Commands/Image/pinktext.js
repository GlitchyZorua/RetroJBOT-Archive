module.exports = {
	name: 'pinktext',
	async execute({ send, input }) {
			return 'https://coveryourselfinoil.com/text/osmium.php?t=' + encodeURIComponent(input);
	}
}