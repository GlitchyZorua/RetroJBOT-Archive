
module.exports = {
    name: 'date',
    async execute(client, message) {
      var thisDate;
thisDate = new Date();
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
      message.channel.send(`📆 ${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getFullYear()}`)
      console.log(`📆 ${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getFullYear()}`)
      if (n == "Friday"){
        message.channel.send("https://cdn.discordapp.com/attachments/748024830842110012/832784810044424222/video0.mp4")
      }
    }
}