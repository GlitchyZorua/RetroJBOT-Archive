module.exports = {
    name: '69ball',
    async execute(client, message, args) {
        message.channel.send(':8ball: ' + nball[Math.floor(Math.random() * nball.length)])
    console.log("[MSGAL] rolling the magic 69ball...")
    }
}