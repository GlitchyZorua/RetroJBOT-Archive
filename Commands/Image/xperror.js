module.exports = {
    name: 'xperror',
    async execute(client, message) {
        message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
            let thingtosend = message.content.slice(10).rpremovepings()
            const aaaa = new Discord.MessageEmbed()
          .setImage("http://atom.smasher.org/error/xp.png.php?icon=Error3&title=Error&url=&text=" + encodeURIComponent(thingtosend) + "&b1=&b2=OK")
        message.channel.send(aaaa);
            //message.channel.send("http://atom.smasher.org/error/xp.png.php?icon=Error3&title=Error&url=&text=" + encodeURIComponent(thingtosend) + "&b1=&b2=OK")
            msg.delete();
            return;
          });
    }
}