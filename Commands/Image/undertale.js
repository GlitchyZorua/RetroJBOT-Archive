module.exports = {
    name: 'undertale',
    async execute(client, message) {
        let thingtosend = message.content.slice(12).rpremovepings()
        //message.channel.send("If image doesn't appear, but the link does, Open the link to see the image, or try again.")
        const cccc = new Discord.MessageEmbed()
        .setTitle("Undertale Text box. (click here to download if it doesn't show)")
        .setURL("https://www.demirramon.com/utgen.png?message=" + encodeURIComponent(thingtosend))
      .setImage("https://www.demirramon.com/utgen.png?message=" + encodeURIComponent(thingtosend))
    
      console.log("https://www.demirramon.com/utgen.png?message=" + encodeURIComponent(thingtosend))
    message.channel.send(cccc);
    }
}