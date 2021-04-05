String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'lowercase',
    async execute(client, message) {
      let thingtosend = message.content.slice(12).removepings()
      if (thingtosend == ""){
        message.channel.send(":x: syntax error! synax: j.figlet <text>")
          return
        }
      message.channel.send(thingtosend.toLowerCase())
      console.log("[MSG]" + thingtosend.toLowerCase())
    }
}