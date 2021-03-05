module.exports = {
    name: 'say',
    async execute(client, message) {
      if (message.channel instanceof Discord.DMChannel) { //do not execute
        message.channel.send(':no_entry_sign: You cannot use this command in dms.');
        return;
      }
      let thingtosend = message.content.slice(7).removepings()
      //message.channel.send(':x: this command is disabled.')
      message.delete().catch(_O_o => { }); //deletes previous messages. Sneaky, Sneaky, right?
      // let thingtosend = message.content.slice(7).replace(/(@(?:everyone|here))/gi, 'nope')
      if (thingtosend != '') message.channel.send(thingtosend) //sends the message
      console.log(message.content.slice(7))
      return;
    }
}