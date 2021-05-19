const Discord = require("discord.js");
module.exports = {
    name: 'rps',
    async execute(client, message) {
      let a = (r) => { return Math.floor(Math.random() * r.length) };
      let b = (r) => { return r.replace('rock',':rock:').replace('paper',':pencil:').replace('scissors',':scissors:'); };
      let c = (r, h) => { if(r == 'rock' && h == 'scissors' || r == 'paper' && h == 'rock' || r == 'scissors' && h == 'paper'){ return 'You lost!'; }else if(h == 'rock' && r == 'scissors' || h == 'paper' && r == 'rock' || h == 'scissors' && r == 'paper'){ return 'You won!'; }else if(h == 'rock' && r == 'rock' || h == 'paper' && r == 'paper' || h == 'scissors' && r == 'scissors'){ return 'Tie!'; }else{ return 'Unknown choice' }; };
      let choice = ['rock','paper','scissors'][a(['rock','paper','scissors'])];
      let args = message.content.split(" ");
      let userchoice = args[1];
      let embed = new Discord.MessageEmbed()
         .setColor(65280)
         .addField('You chose', b(userchoice))
         .addField('I chose', b(choice))
         .setFooter(c(choice, userchoice))
      message.channel.send({embed: embed});
          return
    }
}