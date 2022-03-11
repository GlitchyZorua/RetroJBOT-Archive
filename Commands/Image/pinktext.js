module.exports = {
    name: 'pinktext',
    async execute(client, message) {
      message.channel.send("https://coveryourselfinoil.com/text/osmium.php?t=" + encodeURIComponent(message.content.slice(11)));
  }
  }
