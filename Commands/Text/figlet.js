String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'figlet',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> *loading...*').then(msg => {
        let thingtosend = message.content.slice(9).removepings() //https://artii.herokuapp.com/make?text=ASCII+art&font=graffiti
        if (thingtosend == ""){
          message.channel.send(":x: Syntax error! Synax: j.figlet <text>")
            return
          }
        require('https').get('https://artii.herokuapp.com/make?text='+encodeURIComponent(thingtosend)+'&font=graffiti', function (d) { d.on('data', function (n) { message.channel.send('```'+String(n)+'```') }) })
        msg.delete();
        return
        });
    }
}