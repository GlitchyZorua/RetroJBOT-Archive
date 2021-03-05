module.exports = {
    name: 'sad',
    async execute(client, message) {
      message.channel.send("*" + message.author.tag + " is sad... cheer up my friend.*");
    }
}