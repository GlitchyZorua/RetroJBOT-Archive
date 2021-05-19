String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
      .replace("nigger", "no")
      .replace("Nigger", "no")
};

module.exports = {
    name: 'cowsay',
    async execute(client, message) {
      let thingtosend = message.content.slice(9).removepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Syntax: j.cowsay <text>")
          return
        }
      message.channel.send('<a:Loading_Color:759914061696860202> *Moooooooo!*').then(msg => {
        require('http').get('http://cowsay.morecode.org/say?message='+encodeURIComponent(thingtosend)+'&format=text', function (d) { d.on('data', function (n) { message.channel.send('```'+String(n)+'```') }) })
        msg.delete();
        return;
      });
    }
}