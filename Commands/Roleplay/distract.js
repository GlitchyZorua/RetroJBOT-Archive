String.prototype.rpremovepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, '(a)everyone')
      .replace(/<@&(\d+)>/gi, "no. stop.")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'distract',
    async execute(client, message) {
      let thingtosend = message.content.slice(10).rpremovepings()
if (thingtosend == ""){
message.channel.send(":x: Syntax error! Synax: j.distract <text>")
  return
}
      message.channel.send("" + thingtosend+ " has been distracted!");
      message.channel.send("https://media.giphy.com/media/eGO2auvt1ktByeEvEe/giphy.gif");
    }
}