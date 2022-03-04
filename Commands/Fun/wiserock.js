

module.exports = {
    name: 'wiserock',
    async execute(_client, message, _args) {

// You can call me out for using old discord.js documents to make this. I don't care tbh ¯\_(ツ)_/¯



// Not going to use buttons, yet. Sorry...


message.channel.send("<:Big_wise_rock:946959662320877589> Hi, I'm the Wise Rock! I give solid advice in exchange for ~~clams~~ Free!\n\n\n What kind of advice would you like me to give? \n*Select with reactions*\n\n 3️⃣ Good Advice \n 2️⃣ Ok Advice \n 1️⃣ Bad Advice \n 0️⃣ No Advice").then(function (sentMessage) {
  sentMessage.react('0️⃣').then(() => sentMessage.react('1️⃣').then(() => sentMessage.react('2️⃣').then(() => sentMessage.react('3️⃣'))))


const filter = (reaction, user) => {
return ['0️⃣', '1️⃣','2️⃣','3️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
};

sentMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
.then(collected => {
  const reaction = collected.first();
  if (reaction.emoji.name === '0️⃣') {
    message.channel.send('<:Big_wise_rock:946959662320877589> Feel free to come back anytime for advice!');
      return
      }
      if (reaction.emoji.name === '1️⃣'){
      message.channel.send('<:Big_wise_rock:946959662320877589> ...Understood! Here is your advice.')
      let bad = ["Anything is okay as long as you don\'t get caught!","Yell ***ALL THE TIME!!***","When life gives you lemons... Start a Lemonade stand in front of a Train Station and give away complimentary train passes with each purchase of lemonade.","Listen to everyone's advice.","Don't be ugly."]
      setTimeout(function () {
          message.channel.send("<:Big_wise_rock:946959662320877589> "+ bad[Math.floor(Math.random() * bad.length)])
      }, 1000);
      setTimeout(function () {
          message.channel.send("<:Big_wise_rock:946959662320877589> ... I hope this helps!")
      }, 2000);
      return
      }
      if (reaction.emoji.name === '2️⃣'){
          message.channel.send('<:Big_wise_rock:946959662320877589> ...Understood! Here is your advice.')
          let ok = ["Not all advice is good advice.","Never make eye contact while eating a banana.","It is not wise to listen to advice from a rock.",'Your problems will catch up to you eventually.',`There are approximately 238,900 miles between the Earth and the Moon.`]
          setTimeout(function () {
              message.channel.send("<:Big_wise_rock:946959662320877589> "+ ok[Math.floor(Math.random() * ok.length)])
          }, 1000);
          setTimeout(function () {
              message.channel.send("<:Big_wise_rock:946959662320877589> ... I hope this helps!")
          }, 2000);
          return
          }
          if (reaction.emoji.name === '3️⃣'){
              message.channel.send('<:Big_wise_rock:946959662320877589> ...Understood! Here is your advice.')
              let good = ["Follow your heart, but remember to take your brain with you!","Do something today that you'll thank yourself for tomorrow!","Life is short, so smile while you still have teeth!",'Pain doesn\'t last forever.',`If opportunity does not knock, you can always build a door!`]
              setTimeout(function () {
                  message.channel.send("<:Big_wise_rock:946959662320877589> "+ good[Math.floor(Math.random() * good.length)])
              }, 1000);
              setTimeout(function () {
                  message.channel.send("<:Big_wise_rock:946959662320877589> ... I hope this helps!")
              }, 2000);
              return
            }
}).catch(function (_collected) {
    message.reply('⏱ Oops, You took too long to react!');
  });
})
    }
}