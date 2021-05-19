String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'uppercase',
    async execute(client, message) {
      let thingtosend = message.content.slice(12).removepings()
      if (thingtosend == ""){
        message.channel.send(":x: SYNTAX ERROR! SYNTAX: j.figlet <TEXT>, I'M SCREAMING AT YOU BECAUSE MY CAP LOCKS BUTTON IS BROKEN. HELP!")
          return
        }
      message.channel.send(thingtosend.toUpperCase())
      console.log("[MSG]" + thingtosend.toUpperCase())
    return;
    }
}