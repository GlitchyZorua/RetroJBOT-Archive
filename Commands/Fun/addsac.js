module.exports = {
    name: 'addsac',
    async execute(client, message, args, counter) {
      counter++;
      message.channel.send(":x: Community Counter has been discontinued");
      console.log('[MSG] :x: Community Counter has been discontinued');
      return
    }
}