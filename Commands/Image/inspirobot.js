module.exports = {
    name: 'inspirobot',
    async execute(client, message) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
        require('https').get('https://inspirobot.me/api?generate=true', function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
     //   fetch('https://inspirobot.me/api?generate=true').then(response => response.json()).then(a=>{console.log(a);message.channel.send("ok done")})
        msg.delete();
        return;
      });
  }
  }