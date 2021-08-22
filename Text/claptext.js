String.prototype.rpremovepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};

module.exports = {
    name: 'claptext',
    async execute(client, message) {
      
      let thingtosend = message.content.slice(`11`).rpremovepings().replace(/ /g, '👏');
      if (thingtosend == ""){
        message.channel.send(":clap: PUT :clap: SOMETHING :clap: NEXT :clap: TO :clap: THE :clap: FUCKING :clap: COMMAND\n:x: Syntax error! Syntax: j.claptext <text>")
          return
        }
      message.channel.send(thingtosend)
    }
}