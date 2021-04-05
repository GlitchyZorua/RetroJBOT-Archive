String.prototype.removepings = function() {
  return this
      .replace(/<@&(\d+)>/gi, "no")
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'say',
    async execute(client, message) {
      let thingtosend = message.content.slice(6).removepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Synax: j.say <text>")
          return
        }
      //  if (thingtosend != '') 
    message.channel.send(thingtosend) //sends the message
      console.log(message.content.slice(6))
    }
}