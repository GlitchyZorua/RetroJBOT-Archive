
const talkedRecentlya = new Set();
var services_stopped = 0 // ?
module.exports = {
  name: 'feedback',
  async execute({ message, input }) {
    if (services_stopped === 1) return ":x: Sorry, but this service is down.";
    if (talkedRecentlya.has(message.author.id)) return ":alarm_clock: **Cooldown** We appreciate the feedback... but... uh we don't need anyone spamming it so please slowdown. You can send another one in a minute. *tick tock* ";
    talkedRecentlya.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecentlya.delete(message.author.id);
    }, 60000);
    
    client.channels.cache.get('671064651076993024').send(message.author.tag + ': ' + input) //sends the msg to my server
    return ":heavy_check_mark: Thanks for the feedback.";
  }
}