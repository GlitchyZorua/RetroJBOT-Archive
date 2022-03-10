const percentages = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '99'];
const talkedRecently = new Set();
module.exports = {
  name: 'format',
  async execute({ message, authorId }) {
    if (talkedRecently.has(authorId)) return ":alarm_clock: Whoa whoa! Buddy! The drive is already formatted!  You can format it again after 9 seconds. *tick tock*";
    talkedRecently.add(authorId);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(authorId);
    }, 9000);
    let format = await message.channel.send(':warning: WARNING! ALL DATA ON NON-REMOVABLE DISK DRIVE C: WILL BE LOST!\nProceed with Format (Y/N)?y\n <a:Loading_Color:759914061696860202> Formatting hardrive... - 0%');
    let i = 0;
    const interval = setInterval(function() {
      if (i >= percentages.length) {
        format.edit('Format complete');
        clearInterval(interval);
        return;
      }
      format.edit(`:warning: WARNING! ALL DATA ON NON-REMOVABLE DISK DRIVE C: WILL BE LOST!\nProceed with Format (Y/N)?y\n <a:Loading_Color:759914061696860202> Formatting hardrive... - ${percentages[i++]}%`);
      i++;
    }, 1000);
  }
}