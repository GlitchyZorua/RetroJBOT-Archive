var eegg = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'https://miro.medium.com/max/455/1*snTXFElFuQLSFDnvZKJ6IA.png', '', '', '', '', '', '', '', '']
const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')
const { inspect } = require('util');
module.exports = {
	name: 'eval',
	async execute({ input, message }) {
		if (!adminlist.admins.includes(message.author.id)) {
			return ':x: Bot Admin Only.';
		} else {
			try {
				evaled = await eval(input);
				return "```js\n" + inspect(evaled) + "```";
			}
			catch (error) {
				console.error(error);
				return `:x: ***An error occurred during evalation***\n${eegg[Math.floor(Math.random() * eegg.length)]}\n\`\`\`js\n${inspect(error)}\`\`\``;
			}
		}
	}
}
