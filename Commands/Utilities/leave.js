
module.exports = {
	name: 'leave',
	async execute({message, send, authorId}) {
		return `:x: Soon.`
		/*/
		if (authorId == message.guild.owner.id){ send(":x: You are the server owner! You can't leave your own server! If you really want to leave your server, the best you can do is **DELETE IT.** or... **TRANSFER OWNERSHIP**")}
        const sentMessage = await message.channel.send({
            content: "❔ Are you sure you want to quit the server? You won't be able to rejoin this server this server unless you are reinvited.",
            components: [
                {
                    type: "ACTION_ROW",
                    components: [
                        {
                            type: "BUTTON",
                            label: "Leave Server",
                            style: "DANGER",
                            customId: "yes"
                        },
                        {
                            type: "BUTTON",
                            label: "Cancel",
                            style:  "SECONDARY",
                            customId: "no"
                        }
                    ]
                }
            ]
        });
        
        const filter = (button) => button.user.id === message.author.id;
        const collector = sentMessage.createMessageComponentCollector({ filter: filter, max: 1, time: 60000, componentType: "BUTTON"});
        collector.on("collect", interaction => {
            if (interaction.customId == "yes"){ interaction.reply(`🚪You left the server.`); return }
			if (interaction.customId == "no"){ interaction.reply(`❎ Operation Cancelled`); return }
		})
		/*/
    }
}
