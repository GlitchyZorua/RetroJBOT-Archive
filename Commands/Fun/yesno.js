module.exports = {
    name: 'yesno', 
   async execute(message) {
      let fuckyou = ['Yes','No']
      let item = items[Math.floor(Math.random() * fuckyou.length)];
      message.channel.send(item)
}
}