

const talkedRecentlya = new Set();
var services_stopped = 0
String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'feedback',
    async execute(client, message) {
        if (services_stopped === 1) {
            message.send(":x: Sorry, but this service is down.")
            return;
          }
          if (message.channel.nsfw) {
            message.channel.send(":x: Sorry, this command is not allowed in NSFW channels.")
            return;
          }
          if (talkedRecentlya.has(message.author.id)) {
            message.channel.send(":alarm_clock: **Cooldown** We appreciate the feedback... but... uh we don't need anyone spamming it so please slowdown. You can send another one in a minute. *tick tock* ");
        } else {
          let args = message.content.slice(11).removepings()
          console.log('[FEEDBACK] ' + message.author.tag + ': ' + message.content.slice(11));
          message.channel.send(":heavy_check_mark: Thanks for the feedback.");
          client.channels.cache.get('671064651076993024').send(message.author.tag + ': ' + args) //sends the msg to my server
         console.log('[MSG] :heavy_check_mark: Thanks for the feedback.');
         talkedRecentlya.add(message.author.id);
         setTimeout(() => {
           // Removes the user from the set after a minute
           talkedRecentlya.delete(message.author.id);
         }, 60000);
        }
          return
        }
}