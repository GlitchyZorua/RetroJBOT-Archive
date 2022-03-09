const Discord = require('discord.js')
module.exports = {
	name: 'unban',
	async execute(client, message) {
		return ":x: This command is disabled";
		if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You are missing **BAN_MEMBERS** permission!').then(m => m.delete({ timeout: 5000 }));

		if (!args[0]) return message.channel.send('please enter a users id to unban!').then(m => m.delete({ timeout: 5000 }));

		let member;

		try {
			member = await client.users.fetch(args[0])
		} catch (e) {
			console.log(e)
			return message.channel.send('Not a valid user!').then(m => m.delete({ timeout: 5000 }));
		}

		const reason = args[1] ? args.slice(1).join(' ') : 'no reason';

		const embed = new MessageEmbed()
			.setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

		message.guild.fetchBans().then(bans => {

			const user = bans.find(ban => ban.user.id === member.id);

			if (user) {
				embed.setTitle(`Successfully Unbanned ${user.user.tag}`)
					.setColor('#00ff00')
					.addField('User ID', user.user.id, true)
					.addField('user Tag', user.user.tag, true)
					.addField('Banned Reason', user.reason != null ? user.reason : 'no reason')
					.addField('Unbanned Reason', reason)
				message.guild.members.unban(user.user.id, reason).then(() => message.channel.send(embed))
			} else {
				embed.setTitle(`:x: User ${member.tag} isn't banned!`)
					.setColor('#ff0000')
				message.channel.send(embed)
			}

		}).catch(e => {
			console.log(e)
			message.channel.send('An error has occurred!')
		});

	}
}
/*/
module.exports = {
	name: 'bodm',
	async execute(client, message) {
		if (message.content.slice(5) === "") {
		  message.channel.send(":x: Syntax Error! Syntax: j.bodm <id> <text>")
		  return;
		}
		 // Now we get the member from the user
		 const member = message.guild.member(user);
		 let args = message.content.slice(4).split(" ")
		 args.shift();
		 let reasona = args.join(" ");
		 client.users.cache.get(args).send(reasona)
	  }
}
/*/