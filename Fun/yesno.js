var yesno = ["yes","no"]
var c = yesno[Math.floor(Math.random() * yesno.length)]
module.exports = {
    name: 'yesno',
    async execute(client, message, args) {
      message.channel.send(yesno)
    }
}