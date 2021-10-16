module.exports = {
    name: 'uptime',
    async execute(client, message, args) {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        var thisDate;
        thisDate = new Date();
        switch (new Date().getHours()) {
            case 12:
              clock = "🕛";
              break;
            case 11:
              clock = "🕚";
              break;
            case 10:
             clock = "🕙";
              break;
            case 9:
              clock = "🕘";
              break;
            case 8:
              clock = "🕗";
              break;
            case 7:
              clock = "🕖";
              break;
            case 6:
              clock = "🕕";
              break;
            case 5:
              clock = "🕔";
              break
            case 4:
              clock = "🕓";
              break;
            case 3:
             clock = "🕒";
            break;
            case 2:
              clock = "🕑";
             break;
             case 1:
              clock = "🕐";
             break;
          }
        message.channel.send(`:arrow_up: Uptime:  ${days}:${hours}:${minutes}:${seconds}\n\n:warning: Due to server limitations, the bot might go offline with or without notice.`);
    }
}