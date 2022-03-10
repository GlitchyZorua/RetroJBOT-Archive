module.exports = {
	name: 'distract',
	async execute({ input, send }) {
		if (input === "") return ":x: Syntax error! Synax: j.distract <text>";
		send(`${input} has been distracted!`);
		send("https://media.giphy.com/media/eGO2auvt1ktByeEvEe/giphy.gif");
	}
}