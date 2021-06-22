var time = 9000
const talkedRecently = new Set();
module.exports = {
    name: 'format',
    async execute(client, message, args) {
      let thingtosend = message.content.slice(8).rpremovepings()
//      setTimeout(() => talkedRecently.delete(message.author.id), time * 1000);
      if (talkedRecently.has(message.author.id)) {
        message.channel.send(":alarm_clock: Whoa whoa! Buddy! The drive is already formatted!  You can format it again after 9 seconds. *tick tock*");
      return
      }
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 9000);
      const percentages = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '99']; //change const to var for now
      message.channel.send(':warning: WARNING! ALL DATA ON NON-REMOVABLE DISK DRIVE C: WILL BE LOST!\nProceed with Format (Y/N)?y\n <a:Loading_Color:759914061696860202> Formatting hardrive... - 0%').then(cook => {
        let i = 0;
        let interval = setInterval(function () {
          if (i >= percentages.length) {
            cook.edit('Format complete');
            clearInterval(interval);
            return;
          }
          cook.edit(':warning: WARNING! ALL DATA ON NON-REMOVABLE DISK DRIVE C: WILL BE LOST!\nProceed with Format (Y/N)?y\n <a:Loading_Color:759914061696860202> Formatting hardrive... - ' + percentages[i] + '%');
          i++;
        }, 1000);
      });
    }
}