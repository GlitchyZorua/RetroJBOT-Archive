module.exports = {
    name: 'servercount',
    async execute(client, message, args) {
        message.channel.send("I am in " + client.guilds.size + " servers")
        console.log("[MSG]" + "I am in " + client.guilds.size + " servers");
    }
}