module.exports = {
    name: 'frozestatus',
    async execute(client, message) {
      message.channel.send(":x: This command is unavailable on this version of RetroJBOT. Check back later.")
      return
      if (!adminlist.admins.includes(message.author.id)) {
        message.channel.send(':x: Error: Bot admin is required.')
        return;
      }
      if (message.content.substring(14) === "on"){
        statusfroze = 1;
        message.channel.send(":white_check_mark: Status has been frozed");
      }
      if (message.content.substring(14) === "off"){
      statusfroze = 0;
      message.channel.send(":white_check_mark: Status has been unfrozed.");
      }
    }
}