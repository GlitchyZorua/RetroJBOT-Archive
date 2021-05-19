module.exports = {
    name: 'stop',
    async execute(client, message, args) {
      message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
 //const connection = await message.member.voice.channel.leave();
 message.channel.send("*VHS Tape being ejected* :stop_button: **Stopped...**");
      });
      }
}