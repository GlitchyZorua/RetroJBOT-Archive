module.exports = {
    name: 'die',
    async execute(client, message, args) {
      if (!adminlist.admins.includes(message.author.id)) {
        message.channel.send(':x: Bro, You cant just tell someone to die! You need `BOT_ADMIN` or higher to use this command. Access Denied!');
        console.log('[MSG] [ERROR] :x: Bro, You cant just tell someone to die! You need `BOT_ADMIN` or higher to use this command. Access Denied!')
        return
      } else {
        try {
          console.log('[MSG] :warning: <a:Loading_Color:759914061696860202> Shutting Down...')
          message.channel.send(":warning: <a:Loading_Color:759914061696860202> Shutting Down...");
        client.destroy()
        } catch (error) {
          message.reply(':x: Failed to shutdown. Error in the terminal.');
          console.log('[MSG] [ERROR] :X: Failed to shutdown: ')
          messsage.channel.sendEmbed(embed).catch(err => console.log(err));
        }
      }
    }
    }
}