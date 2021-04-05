String.prototype.rpremovepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'thot',
    async execute(client, message) {
      let thingtosend = message.content.slice(6).rpremovepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Synax: j.thot <text>")
          return
        }
      message.channel.send("BEGONE" + thingtosend) //sends the message *HOST NOTE* wow i didnt know thank u
      console.log(message.content.slice(6))
    return;
    }
}