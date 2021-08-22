module.exports = {
    name: 'vaporwave',
    async execute(client, message) {
      message.channel.send(message.content.slice(12).replace(/()/g, ' '))
      if (thingtosend == ""){
        message.channel.send(":x: S y n t a x  e r r o r !  S y n a x :  j.vaporwave  < t e x t >\nTranslation: :x: Syntax Error! j.vaporwave <text>")
          return
        }
      console.log("[ M S G ] [ I N F O ]" + message.content.slice(12).toUpperCase().replace(/()/g, ' '));
    }
}