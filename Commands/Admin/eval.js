module.exports = {
    name: 'eval',
    async execute(client, message, args) {
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(':x: *You told them to do something, the bot refused, It seems like you need `BOT_ADMIN` to use this command.*');
      return
      } else {
      try {
        evaled = await eval(args.join(' '));
        message.channel.send("```js" + "\n" + inspect(evaled) + "```");
        console.log(inspect(evaled));
      }
      catch (error) {
        console.error(error);
        message.channel.send(':x: ***Oops! An error occurred!***\n' + eegg[Math.floor(Math.random() * eegg.length)] + "\n```js" + "\n" + inspect(error) + "```");
      }
    }
  }
}
