module.exports = {
	name: "gay",
	help: "Check how gay a user is.",
	async execute({ input }) {
		if (input === "") return ":x: Syntax Error! Syntax: j.gay <text>";
		if (input.toLowerCase() == "devil") return "**:smiling_imp: Devil** is 666% gay";
		if (input.toLowerCase() == "satan") return "**:smiling_imp: Satan** is 666% gay";
		const gay = Math.floor(Math.random() * 100);
		return `:${gay > 50 ? "rainbow_flag" : "sweat_smile"}: **${input}** is ${gay}% gay${gay === 69 ? " ( ͡° ͜ʖ ͡°)" : ""}`;
	},
	slash({ options, callCommand }) {
		callCommand(`<@${options.getUser("user").id}>`);
	},
	options: [
		{
			type: "USER",
			name: "user",
			description: "The user you want to check",
			required: true,
		}
	],
}