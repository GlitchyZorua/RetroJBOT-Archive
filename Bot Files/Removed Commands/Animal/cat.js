const { body } = await superagent
.get("https://aws.random.cat/meow");
module.exports = {
    name: 'cat',
    execute: async function(client, message, args) {
        message.channel.send(':Loading_Color: *Meow?*').then(msg => {
            message.channel.send(body.file)
            msg.delete();
          });
    }
}