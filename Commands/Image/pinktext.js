module.exports = {
<<<<<<< HEAD
	name: 'pinktext',
	async execute({ send, input }) {
			return 'https://coveryourselfinoil.com/text/osmium.php?t=' + encodeURIComponent(input);
	}
}
=======
    name: 'pinktext',
    async execute(client, message) {
      message.channel.send("https://coveryourselfinoil.com/text/osmium.php?t=" + encodeURIComponent(message.content.slice(11)));
  }
  }
>>>>>>> ead3150434437a9827905ad07b3ebb2d45c33cbc
