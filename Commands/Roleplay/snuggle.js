String.prototype.rpremovepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, '(a)everyone')
      .replace(/<@&(\d+)>/gi, "no. stop.")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'snuggle',
    async execute(client, message) {
      let thingtosend = message.content.slice(10).rpremovepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Synax: j.snuggle <text>")
          return
        }
      message.channel.send("*" + message.author.tag + " snuggles" + thingtosend + "! OwO*");
    }
}