var winEject = require('win-eject');
var drive = "D:" // Drive Letter.
module.exports = {
	name: 'cdtray',
	async execute({client, message, authorId, input, send}) {

    if (authorId !== "461984828716482562"){
		return `⛔ This command is only for bot owner only.`
		//why did i make this.
	}
	    if (input === "open"){ // Opens the CD Tray 
			send('<a:Loading_Color:759914061696860202> Ejecting Disk...').then(msg => { //Nice loading animation...
			winEject.eject(drive, function() {
			send(`⏏💽 CD Tray Opened!`)
			return
			});
			msg.delete();
			return
		});
		return
		}
		if (input === "close"){ //Not many computers support this, But I thought I throw this in here anyway.
			send('<a:Loading_Color:759914061696860202> Closing Disk...').then(msg => {
			winEject.close(drive, function() {
				send(`⏏💽 Closed CD Tray.`)
				return
			});	
			msg.delete();
			return
		});
		return
		}
		send(':x: Invalid Arguments! Syntax: j.cdtray (<open|close>)') // Invalid Arguments.
	}
}
