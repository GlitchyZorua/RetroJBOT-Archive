
String.prototype.removepings = function() {
  return this
      .replace("nigger", "no")
      .replace("Nigger", "no")
      .replace("`", "'")
};

module.exports = {
    name: 'binarytotext',
    async execute(client, message) {
        let thingtosend = message.content.slice(15).removepings() //https://artii.herokuapp.com/make?text=ASCII+art&font=graffiti
        if (thingtosend == ""){
          message.channel.send(":x: Syntax error! Synax: j.binarytotext <text>")
            return
          }
          var a = thingtosend.split(" ").map(a => String.fromCharCode(parseInt(a, 2))).join("")
          message.channel.send('```'+a+'```')
    }
}