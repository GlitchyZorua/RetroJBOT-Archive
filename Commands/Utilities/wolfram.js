var tr = require('tor-request');
String.prototype.removepings = function() {
  return this
      .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
      .replace(/<@&(\d+)>/gi, "no") //role ping
      .replace(/<@!?(\d+)>/gi, "no") //user ping
};
module.exports = {
    name: 'wolfram',
    async execute(client, message, args) {
    message.channel.send(':x: Command has been disabled')
    return
//message.channel.send(":x: This command has been disabled because it can be used to doxx my creator. The command will be rewrited with a tor proxy soon:tm:")
//return
message.channel.send('<a:Loading_Color:759914061696860202> *loading...*').then(msg => {
let thingtosend = message.content.slice(9).removepings()
if (thingtosend === ""){
message.channel.send(":x: Syntax Error! Syntax: j.wolfram <question>")
return
}
tr.request('https://api.wolframalpha.com/v1/result?i='+encodeURIComponent(thingtosend)+'&appid=G3UG26-V9K9QVY5JA', function (err, res, body) {
  if (err){
    message.channel.send(":x: An error occurred. ")
    return
  }
  if (!err && res.statusCode == 200) {
    message.channel.send('`'+body+'`');
    return
    }
    message.channel.send(":x: `No answer found`")
    return
    });
    msg.delete();
});
return;
}
}
/*/
const unixTime = Math.floor(Date.now() / 1000);
    var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes();
  
  if (minutes < 10) {
  minutes = "0" + minutes;
  }
  
  var suffix = "AM";
  if (hours >= 12) {
  suffix = "PM";
  hours = hours - 12;
  }
  if (hours == 0) {
  hours = 12;
  }

  //response
  if (thingtosend.toLowerCase() == "who are you?") {
    message.channel.send("`I am retrojbot.`");
    return
  }
  if (thingtosend.toLowerCase() == "who are you") {
    message.channel.send("`I am retrojbot.`");
    return
  }
    if (thingtosend.toLowerCase() == "why are you here") {
    message.channel.send("`Because the server owner wants me here!`");
    return
  }
  if (thingtosend.toLowerCase() == "why are you here?") {
    message.channel.send("`Because the server owner wants me here!`");
    return
  }
  if (thingtosend.toLowerCase() == "who r you") {
    message.channel.send("`I am retrojbot.`");
    return
  }
  if (thingtosend.toLowerCase() == "who are u") {
    message.channel.send("`I am retrojbot.`");
    return
  }
  if (thingtosend.toLowerCase() == "who r u") {
    message.channel.send("`I am retrojbot.`");
    return
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, ban") {
    message.channel.send("`Oops. I cannot do that right now. Please use j.ban instead.`");
    return
  }
  if (thingtosend.toLowerCase() == "ban") {
    message.channel.send("`Oops. I cannot do that right now. Please use j.ban instead.`");
    return
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, kick") {
    message.channel.send("`Oops. I cannot do that right now. Please use j.kick instead.`");
    return
  }
  if (thingtosend.toLowerCase() == "kick") {
    message.channel.send("`Oops. I cannot do that right now. Please use j.kick instead.`");
    return
  }
  if (thingtosend.toLowerCase() == "destroy this server") {
    message.channel.send("`I cannot do that. I was made for human-friendly. Not Human killing`");
    return
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, destroy this server") {
    message.channel.send("`I cannot do that. I was made for human-friendly. Not Human killing`");
    return
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, what time is it") {
    message.channel.send("`It's`"+ hours + ":" + minutes + " " + suffix);
    var embed = new Discord.MessageEmbed()
    .setColor('#00b7ff')
    .setTitle(hours + ":" + minutes + " " + suffix)
    .setDescription('RetroJBOT Clock')
    message.channel.send(embed);
    return
  }
  if (thingtosend.toLowerCase() == "what time is it") {
    message.channel.send("`It's "+ hours + ":" + minutes + " " + suffix+"`");
    var embed = new Discord.MessageEmbed()
    .setColor('#00b7ff')
    .setTitle(hours + ":" + minutes + " " + suffix)
    .setDescription('RetroJBOT Clock')
    message.channel.send(embed);
    return
  }
    if (thingtosend.toLowerCase() == "time") {
    message.channel.send("`It's "+ hours + ":" + minutes + " " + suffix+"`");
      var embed = new Discord.MessageEmbed()
        .setColor('#00b7ff')
        .setTitle(hours + ":" + minutes + " " + suffix)
        .setDescription('RetroJBOT Clock')
        message.channel.send(embed);
    return
  }
  if (thingtosend.toLowerCase() == "call ") {
    message.channel.send("`I can't do that. However, I can join voice channels.`");
    return
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, call ") {
    message.channel.send("`I can't do that. However, I can join voice channels.`");
    return
  }
  if (thingtosend.toLowerCase() == "do nothing") {
    message.channel.send("`OK.`");
    return
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, do nothing") {
    message.channel.send("`OK.`");
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, baka") {
    message.channel.send("`Baka.`");
    return
  }
  if (thingtosend.toLowerCase() == "baka") {
    message.channel.send("`Baka.`");
    return
  }
  if (thingtosend.toLowerCase() == "what is your favorite music") {
    message.channel.send("`Usually, I don't have a favorite music, but I will say that I like Monstercat. (Totally not Gadget room, of course.)`");
    return
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, what is your favorite music") {
    message.channel.send("`Usually, I don't have a favorite music, but I will say that I like Monstercat. (Totally not Gadget room, of course.)`");
    return
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, where is monstercat") {
    message.channel.send("`He is probably hiding in the boxes over there. But I don't know which one he is hiding in. Want to find him? use j.surprise`");
    return
  }
  if (thingtosend.toLowerCase() == "where is monstercat?") {
    message.channel.send("`He is probably hiding in the boxes over there. But I don't know which one he is hiding in. Want to find him? use j.surprise`");
    return
  }
  if (thingtosend.toLowerCase() == "where is monstercat") {
    message.channel.send("`He is probably hiding in the boxes over there. But I don't know which one he is hiding in. Want to find him? use j.surprise`");
    return
  }
  if (thingtosend.toLowerCase() == "hi") {
    message.channel.send("`Hello.`");
    return
  }
  if (thingtosend.toLowerCase() == "hello") {
    message.channel.send("`Hello.`");
    return
  }
  if (thingtosend.toLowerCase() == "hey retrojbot, what is the unix time") {
    message.channel.send("`"+unixTime+"`");
    return
  }
  if (thingtosend.toLowerCase() == "what is the unix time") {
    message.channel.send("`"+unixTime+"`");
    return
  }
  if (thingtosend.toLowerCase() == "is sex real") {
    message.channel.send("`yes`");
    return
  }
  if (thingtosend.toLowerCase() == "fuck you") {
    message.channel.send("`That's not very nice.`");
    return
  }
  if (thingtosend.toLowerCase() == "kys") {
    message.channel.send("`That's not very nice.`");
    return
  }
  if (thingtosend.toLowerCase() == "ojchan") {
    message.channel.send("`FUCK YOU`");
    return
  }
  if (thingtosend.toLowerCase() == "hey siri") {
    message.channel.send("`You got the wrong assistent... Thats ok! mistakes happens.`");
    return
  }
  if (thingtosend.toLowerCase() == "help") {
    message.channel.send("`i can tell the date, tell the time, tell how far the sun from the earth is, tell the unix time... and other stuff I guess. Just note that this command is work in progress. If the question you asked isn't in my database, it means i haven't learned it yet. Suggest them in j.feedback <text>. If you only need the help command for this bot, do j.help. Thanks.`");
    return
  }
  if (thingtosend.toLowerCase() == "are you single") {
    message.channel.send("`Wha- what? SINGLE? but i am a robot! Why would I marry someone?`");
    return
  }
  if (thingtosend.toLowerCase() == "date") {
    var year = thisDate.getFullYear()
    var date = thisDate.getDate()
    var month = thisDate.getMonth()
 message.channel.send('`'+month+'/'+date+'/'+year+'`')
 var embed = new Discord.MessageEmbed()
        .setColor('#00b7ff')
        .setTitle(month+'/'+date+'/'+year)
        .setDescription('RetroJBOT Calender')
        message.channel.send(embed);
    return
  }
  if (thingtosend.toLowerCase() == "what is the date") {
    var year = thisDate.getFullYear()
    var date = thisDate.getDate()
    var month = thisDate.getMonth()
 message.channel.send('`'+month+'/'+date+'/'+year+'`')
 var embed = new Discord.MessageEmbed()
        .setColor('#00b7ff')
        .setTitle(month+'/'+date+'/'+year)
        .setDescription('RetroJBOT Calender')
        message.channel.send(embed);
    return
  }
  if (thingtosend.toLowerCase() == "is it your or you're") {
    message.channel.send("`Oh come on. You can't just-- ugh.`");
    return
  }
  if (thingtosend.toLowerCase() == "how far is the sun") {
    message.channel.send("`It is 91.989 million mi`");
    message.channel.send("https://embed.rauf.wtf/91.989+million+mi?&color=0A16FF&image=https://www.rd.com/wp-content/uploads/2019/12/shutterstock_138195971-e1575492812271-scaled.jpg&url=https://urls.ziad87.net/CmqTb")
    message.channel.send(">>> `As noted earlier, Earth's average distance to the Sun is about 93 million miles (150 million kilometers) from the Sun. That's 1 AU. Mars is on the three-yard line of our imaginary football field. The red planet is about 142 million miles (228 million kilometers) on average from the Sun.`")
    return
  }else{
    /*/
