module.exports = {
    name: 'gay',
    async execute(client, message, args) {
        let thingtosend = message.content.slice(6).rpremovepings()
        var gay = Math.floor(Math.random() * 100);
        if (thingtosend.toLowerCase() == "devil") {
          message.channel.send("**:smiling_imp: Devil** is 666% gay")
          console.log("[MSGAL] [GAY] 666")
          return
        }
        if (thingtosend.toLowerCase() == "satan") {
          message.channel.send("**:smiling_imp: Satan** is 666% gay")
          console.log("[MSGAL] [GAY] 666")
          return
        }
        if (gay == 69) {
          message.channel.send(":rainbow_flag: **" + thingtosend + "** is " + gay + "% gay ( ͡° ͜ʖ ͡°)")
          console.log("[MSGAL] [GAY] 69")
          return
        }
        if (gay > 50) {
          message.channel.send(":rainbow_flag: **" + thingtosend + "** is " + gay + "% gay")
          console.log("[MSGAL] [GAY]" + gay)
        } else {
          message.channel.send(":sweat_smile: **" + thingtosend + "** is " + gay + "% gay")
          console.log("[MSGAL] [GAY] " + gay)
        }
        return;
    }
}