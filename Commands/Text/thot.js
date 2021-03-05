module.exports = {
    name: 'thot',
    async execute(client, message) {
      let thingtosend = message.content.slice(6).rpremovepings()
      message.channel.send("BEGONE" + thingtosend) //sends the message *HOST NOTE* wow i didnt know thank u
      console.log(message.content.slice(6))
    return;
    }
}