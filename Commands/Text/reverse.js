String.prototype.aremovepings = function() {
  return this
      .replace('`', '\'')
      .replace(/<@&(\d+)>/gi, "no")
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
function reverse(txt) {
  return txt.split('').reverse().join('');
}
module.exports = {
    name: 'reverse',
    async execute(client, message) {
      let thingtosend = message.content.slice(10).aremovepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Syntax: j.reverse <text>")
          return
        }
      message.channel.send('```'+reverse(thingtosend)+'```')
    }
}