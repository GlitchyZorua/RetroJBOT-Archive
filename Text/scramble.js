String.prototype.removepings = function() {
  return this
      .replace(/<@&(\d+)>/gi, "no")
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
function shuffle(string) {
  let array = string.replace(/  /gi, ' ').split('')
  array.sort(() => Math.random() - 0.5);
  return array.join("")
}
module.exports = {
    name: 'scramble',
    async execute(client, message) {
      let thingtosend = message.content.slice(8).removepings()
      if (thingtosend == ""){
        message.channel.send(":x: Syntax error! Syntax: j.scramble <text>")
          return
        }
      message.channel.send(shuffle(thingtosend))
    }
}