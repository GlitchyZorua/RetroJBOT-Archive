const superagent = require('superagent');
module.exports = {
    name: 'fortune',
    async execute(client, message, args) {
 //   var ok = ["Loading...","Opening a fortune cookie.","You know you will be fat if you eat too many, right?","Opening that one fortune cookie...","It's fortune cookie time!"]
 //   var okay = [Math.floor(Math.random() * ok.length)]
 const { body } = await superagent
 .get("http://www.yerkee.com/api/fortune/all");
 message.channel.send(":fortune_cookie: "+body.fortune)
 return
    }
}