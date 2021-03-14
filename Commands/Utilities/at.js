module.exports = {
    name: 'date',
    async execute(client, message) {
        var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes();
        var year = thisDate.getFullYear()
        var date = thisDate.getDate()
        var month = thisDate.getMonth()+1
      
      var suffix = "AM";
      if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
      }
      if (hours == 0) {
      hours = 12;
      }
        seconds = thisDate.getSeconds()
        const unixTime = Math.floor(Date.now() / 1000);
        var embed = new Discord.MessageEmbed()
        .setColor('#00b7ff')
        .setTitle("Advanced Time - "+hours + ":" + minutes + ":"+seconds +" "+ suffix)
        .setDescription('Full Time: '+hours + ":" + minutes + ":"+seconds +" "+ suffix+"\nSecond: "+seconds+"\nMinute: "+minutes+"\nHour: "+hours+"\nSuffix:"+suffix+"\nUnixTime:"+unixTime+"\nTime Zone: "+currentTime.getTimezoneOffset()+"\nFull date: "+month+'/'+date+'/'+year+"\nMonth: "+month+"\nDay: "+date+"\nYear: "+year+"\n\n RetroJBOT Clock/Calendar")
        message.channel.send(embed)
    }
}