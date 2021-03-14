module.exports = {
    name: 'rate',
    async execute(client, message, args) {
        let thingtosend = message.content.slice(7).rpremovepings()
        if (thingtosend.toLowerCase() == "fortnite") {
          message.channel.send("I rate fortnite 0/10")
          console.log("[MSG] I rate fortnite 0/10")
          return
        }
        if (thingtosend.toLowerCase() == "retrojbot") {
          message.channel.send("I rate myself 10/10")
          console.log("[MSG] I rate myself 10/10")
          return
        } else {
          rate = Math.floor(Math.random() * 10)
          message.channel.send("I rate " + thingtosend + " " + rate + "/10")
          console.log("[MSG] I rate " + message.content.slice(7) + " " + rate + "/10")
        }
    }
}