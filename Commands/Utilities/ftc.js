module.exports = {
    name: 'ftc',
    async execute(client, message) {
      var fah = message.content.slice(6)
      if (fah === ""){
        message.channel.send(":x: Syntax error! Syntax: j.ftc <#>")
      }
      var fah = Number(fah)
      fahfinal = (fah - 32) / 1.8
      message.channel.send(':thermometer: ' + fahfinal + '°C');
      console.log('[MSG] :thermometer: ' + fahfinal + '°C');
      return
    }
}