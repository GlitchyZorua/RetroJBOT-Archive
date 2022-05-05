const fs = require('fs-extra');
const { send } = require('process');
var adminlist = fs.readJSONSync('./admins.txt')
const { inspect } = require('util');
var exec = require('child_process').exec;
module.exports = {
	name: 'exec',
	async execute({ input, message, channel, send }) {
		if (!adminlist.admins.includes(message.author.id)) {
			send(':x: Bot Admin Only.');
      return
    }
    
    exec(input, function(error, stdout, stderr){ console.log(stdout); if (stdout.length > 3994){ send(':warning: **Output cannot exceed over 3994 character limit! It has been logged in terminal**'); return  } message.channel.send('``` '+stdout+'```')})
	}
}

