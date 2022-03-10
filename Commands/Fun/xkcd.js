const Discord = require('discord.js');
const xkcd = require('xkcd-api')

module.exports = {
    name: 'xkcd',
    async execute(client, message) {
        let thingtosend = message.content.slice(6).removepings()
       // Random comic
       if (thingtosend == "random"){
       xkcd.random(function(error, response) {
        if (error) {
          console.error(error);
          message.channel.send(":x: Oops. an error occurred!")
          return
        } else {
          console.log(response);
          message.channel.send("https://xkcd.com/" + response.num)
          return
        }
      });
    }
    // Latest comic
    if (thingtosend == "latest"){
        xkcd.random(function(error, response) {
            if (error) {
              console.error(error);
              message.channel.send(":x: Oops. an error occurred!")
              return
            } else {
              console.log(response);
              message.channel.send("https://xkcd.com/" + response.num)
              return
            }
          }); 
    }
// Get particular comic
    xkcd.get(thingtosend, function(error, response) {
        if (error) {
          console.error(error);
        } else {
          console.log("https://xkcd.com/" + response.num);
        }
      });
    }
    }