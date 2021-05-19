module.exports = {
    name: 'rate',
    async execute(client, message, args) {
        let thingtosend = message.content.slice(7).rpremovepings()
        if (thingtosend.toLowerCase() == "fortnite") {
          message.channel.send("I rate fortnite 0/10")
          console.log("[MSG] I rate fortnite 0/10")
          return
        }
        if (thingtosend.toLowerCase() == "<@612742660658167840>") {
          message.channel.send("I rate myself 10/10")
          console.log("[MSG] I rate myself 10/10")
          return
        }
        if (thingtosend.toLowerCase() == "myself") {
          message.channel.send("I rate myself 10/10")
          console.log("[MSG] I rate myself 10/10")
          return
        }
        if (thingtosend.toLowerCase() == "retrojbot") {
          message.channel.send("I rate myself 10/10")
          console.log("[MSG] I rate myself 10/10")
          return
        } 
        if (thingtosend.toLowerCase() == "@retrojbot") {
            message.channel.send("I rate myself 10/10")
            console.log("[MSG] I rate myself 10/10")
            return
          } 
          if (thingtosend.toLowerCase() == "retrojbot#3932") {
            message.channel.send("I rate myself 10/10")
            console.log("[MSG] I rate myself 10/10")
            return
          } 
          if (thingtosend.toLowerCase() == "@retrojbot#3932") {
            message.channel.send("I rate myself 10/10")
            console.log("[MSG] I rate myself 10/10")
            return
          } 
          if (thingtosend.toLowerCase() == "You can't activate this easter egg. Isn't that weird?") {
            message.channel.send("This message shouldn't appear... if you did then... congrats!")
            console.log("[MSG] This message shouldn't appear... if you did then... congrats!")
            return
          } 
          if (thingtosend.toLowerCase() == "461984828716482562") {
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