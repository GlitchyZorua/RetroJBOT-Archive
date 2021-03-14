module.exports = {
    name: 'donut',
    async execute(client, message, args) {
      var doughnuts = ["🍩", "<:american_donut:502294189048987648>"]
      var str = doughnuts[Math.floor(Math.random() * doughnuts.length)]
      message.react(str);
      message.channel.send("Have a donut: " + str)
      console.log("Have a donut: " + str)
      return
    }
}