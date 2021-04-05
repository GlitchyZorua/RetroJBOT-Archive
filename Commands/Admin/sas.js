module.exports = {
    name: 'sas',
    async execute(client, message, args) {
    message.channel.send(":x: Sas can't be used at this time")
    return
      if (!adminlist.admins.includes(message.author.id)) {
        message.channel.send(':x: `Bot admin only.`');
        return
        }
    if (message.content.substring(6) === "on"){
      const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('SAS Enabled')
      .setDescription('All services has been offline until further notice')
      .setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788942412927467580/vglitch.png')
      client.channels.cache.get('617865643307434025').send(":warning: Serversend is down. Check back later")
      client.channels.cache.get('476209927128612864').send(embed)
      services_stopped = 1;
      message.channel.send(":white_check_mark: :octagonal_sign: Successfully stopped all services");
    }
    if (message.content.substring(6) === "off"){
        const embed = new Discord.MessageEmbed()
      .setColor('#00ff00')
      .setTitle('SAS Disabled')
      .setDescription('All services is online.')
      .setThumbnail('https://cdn.discordapp.com/attachments/676219827282509843/788945688762646548/vglitch.png')
      client.channels.cache.get('617865643307434025').send(":ballot_box_with_check: Serversend is back online.")
      client.channels.cache.get('476209927128612864').send(embed)
    services_stopped = 0;
    message.channel.send(":white_check_mark: OK, all service are back online.");
    }
    }
}