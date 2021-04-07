module.exports = {
    name: 'cook',
    async execute(client, message, args) {
      let thingtosend = message.content.slice(7).rpremovepings()
      if (thingtosend === ""){
        message.channel.send(":x: **COOK FAILED** Syntax Error! Syntax: j.cook <text>")
        return
      }
      const percentages = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '99']; //change const to var for now
      if (thingtosend.toLowerCase() == "turkey") {
        message.channel.send('https://web.archive.org/web/20090724093134if_/http://sg.geocities.com/tanwunhui/roasted_turkey.gif')
      }
      message.channel.send('<a:Loading_Color:759914061696860202> **COOKING** ' + thingtosend + ' - 0%').then(cook => {
        let i = 0;
        let interval = setInterval(function () {
          if (i >= percentages.length) {
            cook.edit('**DONE COOKING** Successfully cooked ' + thingtosend + '!');
            clearInterval(interval);
            return;
          }
          cook.edit('<a:Loading_Color:759914061696860202> **COOKING** ' + thingtosend + ' - ' + percentages[i] + '%');
          i++;
        }, 1000);
      });
    }
}