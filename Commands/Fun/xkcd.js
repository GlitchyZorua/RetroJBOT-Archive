const superagent = require('superagent');
const Discord = require('discord.js');
const xkcd = require('xkcd-api');

module.exports = {
  name: 'xkcd',
  async execute({ input }) {
    // Random comic
    if (input === "random") {
      xkcd.random(function (error, response) {
        if (error) {
          console.error(error);
          message.channel.send(":x: Oops. an error occurred!")
          return
        } else {
          console.log(response);
          message.channel.send(response)
          return
        }
      });
    }
    /* Latest comic
    if (thingtosend == "latest") {
      xkcd.random(function (error, response) {
        if (error) {
          console.error(error);
          message.channel.send(":x: Oops. an error occurred!")
          return
        } else {
          console.log(response);
          message.channel.send(response)
          return
        }
      });
    }*/ 
    // Get particular comic
    xkcd.get(input, function (error, response) {
      if (error) {
        console.error(error);
        return ":x: funny error"
      } else {
        return response;
      }
    });
  }
}