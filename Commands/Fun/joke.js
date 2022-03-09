module.exports = {
    name: 'joke',
    async execute({ message }) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => msg.delete());
      return await new Promise(function(resolve){
        require('https').get('https://v2.jokeapi.dev/joke/Any?format=txt&safe-mode', function (d) { 
          d.on('data', function (n) { 
            resolve(n.toString()); 
          });
        });
      });
    }
}