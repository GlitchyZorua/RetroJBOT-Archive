var thisDate;
thisDate = new Date();
module.exports = {
    name: 'date',
    async execute(client, message) {
      message.channel.send(`📆 ${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getFullYear()}`)
      console.log(`📆 ${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getFullYear()}`)
    }
}