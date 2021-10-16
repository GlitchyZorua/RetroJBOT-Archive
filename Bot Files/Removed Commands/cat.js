const superagent = require('superagent');
module.exports = {
    name: 'cat',
    execute: async function execute(client, message, args) {
        const { body } = await superagent
        .get("https://aws.random.cat/meow");
        message.channel.send(':Loading_Color: *Meow?*').then(async msg => {
            message.channel.send(body.file)
            msg.delete();
          });
    }
}