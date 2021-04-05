String.prototype.removepings = function() {
  return this
      .replace(/<@&(\d+)>/gi, "no")
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'scramble',
    async execute(client, message) {
      let thingtosend = message.content.slice(12).removepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Synax: j.figlet <text>")
          return
        }
      message.channel.send(thingtosend.toLowerCase())
      console.log("[MSG]" + thingtosend.toLowerCase())
    }
}