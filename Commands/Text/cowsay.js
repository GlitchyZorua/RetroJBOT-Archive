module.exports = {
    name: 'cowsay',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Moooooooo!*').then(msg => {
        let thingtosend = message.content.slice(9).removepings().encodeURIComponent()
        if (thingtosend == ""){
          message.channel.send(":x: Syntax error! Synax: j.cowsay <text>")
            return
          }
        require('http').get('http://cowsay.morecode.org/say?message='+thingtosend+'&format=text', function (d) { d.on('data', function (n) { message.channel.send('```'+String(n)+'```') }) })
        msg.delete();
        return;
      });
    }
}