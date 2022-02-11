const Discord = require("discord.js");

module.exports = {
    name: 'stickykey',
    async execute(client, message, args) {
/*/
        const row = new MessageActionRow()
          new MessageButton()
          .setCustomId('yes')
          .setLabel('Yes')
          .setStyle('SECONDARY')
          new MessageButton()
          .setStyle('SECONDARY')
          .setLabel('No')
          .setCustomId('no')
        const yes = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Do you want to turn on Sticky Keys?")
        .setDescription("Sticky Keys let you use the SHIFT, CTRL, ALT, or Windows Logo keys by pressing one key at a time. The keyboard shortcut to turn on Sticky Keys is to press the SHIFT key 5 times.\n\n\nGo to the Ease of Access Center to disable the keyboard shortcut")
        const m = await message.channel.send({ embeds: [role_embed], components: [row]})

        const aaa = i => i.user.id === message.author.id;

        collector = m.createMessageComponentCollector({ filter: aaa, time: 60000})
        
        collector.on("collect", async i =>{
            if(i.setCustomId  === 'no'){
            message.channel.send('✔')
            } else if (i.CustomId === 'yes'){
                message.channel.send('✔ Alright. Have fun typing.')
            }
        })
        return
        /*/
        message.channel.send(':x: Soon:tm:')
    }
}