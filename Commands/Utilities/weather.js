const weather = require('weather-js');
const Discord = require('discord.js');
var loading = ["Alright hold on, I need to go outside","Loading...",'Please wait...',"Ok, hold on.","jacob was here...","Alright, I hope i don't die from natural disaster."]
module.exports = {
    name: 'weather',
    async execute(client, message) {
      var args = message.content.slice(9)
      message.channel.send('<a:Loading_Color:759914061696860202> '+loading[Math.floor(Math.random() * loading.length)]).then(msg => {
      weather.find({search: args, degreeType: 'F'}, function (error, result){
        // 'C' can be changed to 'F' for fahrenheit results
        if (Math.floor(Math.random() * 100) == Math.floor(Math.random() * 100)){
          message.channel.send("This message is suppose to be an easter egg, if this is your first time of seeing this message, then congrats. Take a screen shot of it, and send it to me. (j.invite). You can stop spamming (if you haven't already) this command")
        }
        if(error) return message.channel.send(":x: An error occurred: "+error);
        if(!args[0]) return message.channel.send(':x: Please specify a location. Syntax: j.weather <location>')
        if(result === undefined || result.length === 0) return message.channel.send(':question: That location doesn\'t exist.');
        /*/
        if (current.skytext == "Sunny") {
        image = "https://i.imgur.com/PB1DFIa.png"
        }
        if (current.skytext == ""){
        image = "https://i.imgur.com/HsJJFEG.png"
        }//https://cdn.discordapp.com/attachments/676219827282509843/862500228820500500/vglitch.png
        /*/
        //.addField(':test_tube: Degree Type', '°F and °C (using j.ftc, might not be accurate)', true)
        var current = result[0].current;
        var location = result[0].location;
        var fah = Number(current.temperature)
        fahfinal = Math.round((fah - 32) / 1.8)
        var faha = Number(current.feelslike)
        fahfinala = Math.round((faha - 32) / 1.8)
        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(` **${current.skytext}**`)
        .setAuthor(`⚠ Be careful! Do not choose where you live if you are issuing the command from a public server.\n\n\nWeather forecast for ${current.observationpoint}`)
        //.setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField(':clock3: Timezone', `UTC${location.timezone}`, true)
        //.addField(':test_tube: Degree Type', '°F and °C (using j.ftc, might not be accurate)', true)
        .addField(':thermometer: Temperature', `Fahrenheit: ${current.temperature}°F, Celsius: `+fahfinal+'°C', true)
        .addField(':wind_blowing_face: Wind', current.winddisplay, true)
        .addField('Feels like', `Fahrenheit: ${current.feelslike}°F, Celsius: `+fahfinala+'°C', true)
        .addField('Humidity', `${current.humidity}%`, true)
        message.channel.send(weatherinfo)
        })
        msg.delete();
      return
  });
}
}