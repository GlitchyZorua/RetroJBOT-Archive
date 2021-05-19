const Discord = require('discord.js')
String.prototype.rpremovepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
module.exports = {
    name: 'undertale',
    async execute(client, message) {
        let thingtosend = message.content.slice(12).rpremovepings()
        if (thingtosend == ""){ 
          message.channel.send(":x: Syntax Error! j.undertale <text>\nFor advanced people: j.undertale <text> <[<text>=<text>]>\nConfused? Visit https://www.demirramon.com/help/undertale_text_box_generator and/or look at https://www.demirramon.com/help/undertale_text_box_generator_dev")
                }
        //message.channel.send("If image doesn't appear, but the link does, Open the link to see the image, or try again.")
        const cccc = new Discord.MessageEmbed()
        .setTitle("Undertale Text box. (click here to download if it doesn't show)")
        .setURL("https://www.demirramon.com/utgen.png?message=" + encodeURIComponent(thingtosend))
      .setImage("https://www.demirramon.com/utgen.png?message=" + encodeURIComponent(thingtosend))
    
      console.log("https://www.demirramon.com/utgen.png?message=" + encodeURIComponent(thingtosend))
    message.channel.send(cccc);
    }
}