var thisDate;
thisDate = new Date();
module.exports = {
    name: 'time',
    async execute(client, message) {
      var currentTime = new Date(),
      hours = currentTime.getHours(),
      seconds = currentTime.getSeconds(),
      minutes = currentTime.getMinutes();
    
    
    var suffix = "AM";
    if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
    }
    if (hours == 0) {
    hours = 12;
    }
     // if (timehours == 0) { timehours = 12 }
     // timehours = timehours.toString().length > 1 ? timehours : '0' + timehours
     // timeminutes = timeminutes.toString().length > 1 ? timeminutes : '0' + timeminutes
     // timeseconds = timeseconds.toString().length > 1 ? timeseconds : '0' + timeseconds
      message.channel.send('🕒 ' + hours + ':' + minutes + ':' + seconds + ' ' + suffix)
      //+ '\n:warning: `this time isnt really accurate, so sometimes it might show the wrong time`'
    }
}