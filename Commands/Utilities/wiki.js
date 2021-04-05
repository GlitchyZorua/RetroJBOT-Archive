ddg = require("ddg")
const { inspect } = require('util');
const Discord = require('discord.js')
options = {
        "useragent": "hhhhh",
        "no_redirects": "1",
        "no_html": "1",
}

module.exports = {
    name: 'wiki',
    async execute(client, message, err) {
      ddg.query(message.content.slice(6), options, function(err, data){
          if (message.content.slice(6) == ""){
              message.channel.send(":x: Syntax Error! Syntax: j.wiki <article>")
          }
        const a = new Discord.MessageEmbed()
	.setColor("#FFFFFF")
	.setTitle(message.content.slice(6))
	.setAuthor('From wikipedia, the free encyclopedia. Powered by DuckDuckGo api. RetroJBOT will never sell your data.', 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Wikipedia-ico-48px.png', 'https://wikipedia.org')
	.setDescription(data.AbstractText)
        console.log(data.AbstractText)
        
        message.channel.send(a)
      });
      console.log(data.AbstractText)
    
      return
    }
}