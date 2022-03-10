const Discord = require('discord.js')
module.exports = {
    name: 'play',
    async execute() {
      //  const connection = await message.member.voice.channel.join();
        return new Discord.MessageEmbed()
        .setColor('#00b7ff')
        .setTitle('RetroJBOT DJ Music Player - The party is over.')
        .setDescription("We decided to kill off the Music player, RetroJBOT DJ Music Player.\n**__Why?__**\nWe decided to kill off the Bots DJ Music Player because it was kinda broken -- for some reason when you try to play a song, it takes a long time to play. another reason why we decide to kill this off, is because there are better alternatives to RetroJBOT DJ Music Player, Like Rythm. We strongly recommend using Rythm as a replacement to this buggy experimental commands for retroj.\n\n\nThis doesn't mean goodbye, though! We are working on rewriting this broken project, Even though we are aware that Rythm is better then these commands, I think its fun to create these things, lol. anyway, see ya for now.\n\n\n\n\n Rock On! - Jacobw")
        .setTimestamp()
        //message.member.voice.channel.leave();
        //const dispatcher = connection.play(ytdl(thingtosend, { filter: 'audioonly' }));
    }
}