

let eegg = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'https://miro.medium.com/max/455/1*snTXFElFuQLSFDnvZKJ6IA.png', '', '', '', '', '', '', '', '']
const fs = require('fs-extra');
const { send } = require('process');
var adminlist = fs.readJSONSync('./admins.txt')
const { inspect } = require('util');

// *** FLAGS ***
// viewable by flags()
let nodog = [] 
let donotsend = []
let donotcatcherror = []
let noflaghelp = []
let alwaysdog = []
module.exports = {
	name: 'eval',
	async execute({ input, message }) {
		function flags(){
			if (noflaghelp == true){ return }
			return "***Eval Flags***\nHere is a list of flags that you can use in eval."+" - nodog - ignores the w93 dog easter egg\n- donotsend - it won't send the eval output, but will still log it.\n- donotcatcherror - Doesn't catch the error.\n- noflaghelp - this message won't appear.\n- alwaysdog - On every error, the dog easter egg will appear."
		}
		if (!adminlist.admins.includes(message.author.id)) {
			return ':x: Bot Admin Only.';
		} else {
			try {
				evaled = await eval(input);
				if (donotsend == false){
				return "```js\n" + inspect(evaled) + "```";
			}
			}
			catch (error) {
				if (donotcatcherror == true){
					return
				}
				if (donotsend == false){
				console.error(error);
				if (nodog == true) {eegg == [""]}
				if (alwaysdog == true){ eegg == ["https://miro.medium.com/max/455/1*snTXFElFuQLSFDnvZKJ6IA.png"] }
				if (nodog == true && alwaysdog == true){send(':warning: `nodog` and `alwaysdog` are on at the same time. Only one can be enabled.')}
				//if (stdout.length > 3994){ send("") }
				return `:x: ***An error occurred during evalation***\n${eegg[Math.floor(Math.random() * eegg.length)]}\n\`\`\`js\n${inspect(error)}\`\`\``;
		       }
			}
		}
	}
}
