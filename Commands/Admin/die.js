//Please note:
//The bot might restarts itself if you kill it.
//if it doesn't, then there could be a problem with the bot files. or it's just taking a long time to restart, idk.

const fs = require('fs-extra')
var adminlist = fs.readJSONSync('./admins.txt')
module.exports = {
	name: 'die',
	async execute({ send, message }) {
		if (!adminlist.admins.includes(message.author.id)) return ':x: Bro, You cant just tell someone to die! You need `BOT_ADMIN` or higher to use this command. Access Denied!';
		try {
			send(":warning: <a:Loading_Color:759914061696860202> Shutting Down...");
			process.exit(); //the funny script
			//used to be client.destroy();
			message.channel.send(':warning: Failed to shutdown with `process.exit()`, attempting `client.destroy()`...')
			client.destroy();
			message.channel.send("**:x: Oops... It seems that the shutdown system is broken!**\nRetroJBOT Failed to shutdown. Please check the bots code `j.die` and check that the code is up to date, or you can try again to see if the bot will shutdown again, or shut it down manually with j.eval. if you can't troubleshoot the bot yourself, please tell Jacobw#8117.")
			// A way to detect if j.die is broken.
		} catch (error) {
			console.log(error);
			return ':x: Failed to shutdown. Error in the terminal.';
		}
	}
}