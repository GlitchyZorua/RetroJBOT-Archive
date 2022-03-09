const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

module.exports = {
	name: 'date',
	async execute({ send }) {
		const thisDate = new Date();
		const weekday = weekdays[thisDate.getDay()];
		const unix = Math.round(thisDate.getTime() / 1000);
		send(`📆 <t:${unix}:d>`);
		if (weekday === "Friday") send("https://cdn.discordapp.com/attachments/748024830842110012/832784810044424222/video0.mp4"); //dont know why weekdays is needed /shrug
	}
}