const talkedRecently = new Set();
const percentages = ['1', '5', '9', '10', '20', '30', '40', '50', '60', '70', '80', '90', '99'];
module.exports = {
	name: 'cook',
	async execute({ input, message, authorId, methods, send }) {
		if (input === "") return ":x: **COOK FAILED** Syntax Error! Syntax: j.cook <text>";
		if (talkedRecently.has(authorId)) return ":alarm_clock: **Cooldown** You are cooking too fast, Please slowdown after 9 seconds. *tick tock*";
		talkedRecently.add(authorId);
		setTimeout(() => {
			// Removes the user from the set after a minute
			talkedRecently.delete(authorId);
		}, 9000);
		if (input.toLowerCase() === "turkey") return 'https://web.archive.org/web/20090724093134if_/http://sg.geocities.com/tanwunhui/roasted_turkey.gif';
		
		const cook = await send(methods.removePings(`<a:Loading_Color:759914061696860202> **COOKING** ${input} 0%`));
		let i = 0;
		const interval = setInterval(function() {
			if (i >= percentages.length) {
				cook.edit(methods.removePings(`**DONE COOKING** Successfully cooked ${input}!`));
				clearInterval(interval);
				return;
			}
			cook.edit(methods.removePings(`<a:Loading_Color:759914061696860202> **COOKING** ${input} - ${percentages[i++]}%`));
		}, 1000);
	}
}