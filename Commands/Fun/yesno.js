module.exports = {
    name: 'yesno',
<<<<<<< HEAD
    async execute() {
      return Math.random() > 0.5 ? "yes" : "no";
=======
    async execute(client, message, args) {
      message.channel.send(Math.random() > 0.5 ? "yes" : "no")
>>>>>>> ead3150434437a9827905ad07b3ebb2d45c33cbc
    }
}