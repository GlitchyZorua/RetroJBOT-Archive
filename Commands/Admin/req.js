const fs = require('fs-extra')
var eeggtwo = ['Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Can you please stop spamming this command?', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'There is litterally nothing in here.', 'Error: Nothing Found.']
module.exports = {
    name: 'req',
    async execute(client, message, args) {
        if (!adminlist.admins.includes(message.author.id)) {
            message.channel.send(":x: " + eeggtwo[Math.floor(Math.random() * eeggtwo.length)])
            return;
          }
          message.channel.send(':heavy_check_mark: Success: Found ID in `admins.txt`')
        }
    }