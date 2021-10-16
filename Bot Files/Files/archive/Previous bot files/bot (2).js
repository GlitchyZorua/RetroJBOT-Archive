


/*/
Hey can you fix the speggetti code on here?
thanks, i guess. The only thing we need is a
functioning bot with its code cleaned up.

There is a lot of bugs that we need to patch up
before we start updating the bot again for a bigger update

- Jacob
(i need a sleep from this typing)
/*/




const ytdl = require("ytdl-core");
const wiki = require('wikijs').default;
const FFmpeg = require("FFmpeg-static");


process.on('unhandledRejection', function(reason) {
    console.log(new Date().toString(), reason);
});
var version = "8.0.34 RetroJBOT Banana Edition Again...";
const fs = require('fs-extra')
//const animals = require('random-animals-api');
var ssbans = fs.readJSONSync('ssbans.txt')
//var prefix = fs.readJSONSync('prefix.txt') //j.
var adminlist = fs.readJSONSync('./admins.txt')

//const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "no";
var dreidel = [' נ Nun', 'ג Gimel', 'ה hei', 'ש shin']
//const Discord = require('ffmpeg-static');

function distance(lat1, lon1, lat2, lon2, unit) {
  if ((lat1 == lat2) && (lon1 == lon2)) {
    return 0;
  }  else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") { dist = dist * 1.609344 }
    if (unit == "N") { dist = dist * 0.8684 }
    return dist;
  }
}
var yesno = ['yes', 'no']
var cards = [':four_leaf_clover: Ace of Clovers', ':four_leaf_clover: 2 Clovers', ':four_leaf_clover: 3 Clovers',':four_leaf_clover: 4 Clovers',':four_leaf_clover: 5 Clovers',':four_leaf_clover: 6 Clovers',':four_leaf_clover: 7 Clovers',':four_leaf_clover: 8 Clovers',':four_leaf_clover: 9 Clovers',':four_leaf_clover: 10 Clovers',':four_leaf_clover: King Clovers', ':four_leaf_clover: Queen Clovers',':four_leaf_clover: Jack Clover',':black_joker: A joker',':star: Ace of stars',':star: 2 Stars',':star: 3 Stars',':star: 4 Stars',':star: 5 Stars',':star: 6 Stars',':star: 7 Stars',':star: 8 Stars',':star: 9 Stars',':star: 10 Stars',':star: King Stars',':star: Queen Stars',':star: Jack Stars',':spades: Ace of spades',':spades: 2 spades',':spades: 3 spades',':spades: 4 spades',':spades: 5 spades',':spades: 6 spades',':spades: 7 spades',':spades: 8 spades',':spades: 9 spades',':spades: 10 spades',':spades: King spades',':spades: Queen spades',':spades: Jack spades',':hearts: Ace of heart',':hearts: 2 heart',':hearts: 3 heart',':hearts: 4 heart',':hearts: 5 heart',':hearts: 6 heart',':hearts: 7 heart',':hearts: 8 heart',':hearts: 9 heart',':hearts: 10 heart',':hearts: King heart',':hearts: Queen heart',':hearts: Jack heart']
var td = ['truth','dare']
var pi = 3.14
var noscope = 360
var sexnum = 69
var weed = 340
var devil = 666
var thelonelynumber = 1
var discordmessagesent = 0
var whatisthemeaningoflifetheuniverseandeverything = 42
var penisscale = ['8==============D', '8=============D', '8============D', '8===========D', '8=========D', '8========D', '8========D', '8=======D', '8======D', '8=====D', '8=====D', '8====D', '8====D', '8==D', '8=D', '8D', 'Your pp was so small that its gone.']
var nanieegg = ['NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaN', 'NaNi?','NaN','NaN','NaN','Omae wa moe shindu. NaNi?','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN','NaN']
var honk = ['https://cdn.discordapp.com/attachments/472492523386830850/699368048628334622/GooseDance.gif', 'https://cdn.discordapp.com/attachments/472492523386830850/699368081444700221/Meme1.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368136084029470/Meme2.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368176949133372/Meme3.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368223673417750/Meme4.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368263045480538/Meme6.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368340963196938/Meme7.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699369471529320498/Meme5.png']
//const fs = require('fs');

//var saved = fs.readJSONsync("data.json")
var fuckgif = ['https://cdn.weeb.sh/images/SkIk9SUrz.gif', 'https://cdn.weeb.sh/images/rJ2IfTq-f.gif', 'https://cdn.weeb.sh/images/rJx5xa9bf.gif', 'https://cdn.weeb.sh/images/HJqpxp5bf.gif', 'https://cdn.weeb.sh/images/HkVFea9ZM.gif', 'https://cdn.weeb.sh/images/Hk5_ga5bG.gif', 'https://cdn.weeb.sh/images/B1jKga5Zz.gif', 'https://cdn.weeb.sh/images/H1urgT5-f.gif', 'https://cdn.weeb.sh/images/B1rpeTqZf.gif', 'https://cdn.weeb.sh/images/rJ2IfTq-f.gif', 'I dont have anymore gifs, i guess. :(']
function arc(a) {
  var e = require('canvas')
  var c = e.getContext('2d')
  can.width = 150
  can.height = 170
  c.strokeStyle = '#FFFFFF'
  c.beginPath()
  if (a != 0 && a % 360 == 0) {
    a = 359.999
  }
  c.arc(75, 75, 75, 0, (a % 360) / 180 * Math.PI)
  c.stroke()
  c.fillStyle = 'white'
  c.font = '10px Ariel'
  c.fillText('Looped ' + (Math.floor(a / 360)) + ' times.', 0, 170, 150)
  return can.toDataURL()
}
var thisDate;
//
thisDate = new Date();
var readline = require('terminal-kit');
var ssnum = 0;
var TS = 0;
var dadmode = 0;
var f = 0;
var nball = ['of course you uneducated paperclip', 'of course not. I bet you eat Nintendo switch cartridges of fortnity-nite for breakfast', 'idk dude, btw i dont care, btw fuck u', 'ahh im 2much lazy 2 answer now, ask again later', 'dude idgaf, that question is a crap, i ll not respont it', 'OMG NO, OFC NO, R YA CRAZZZZZZYYYY?', 'hm? What? Sorry, I was too busy staring at that ugly mask of yours. Whats that? Its not a mask?']
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var letterscaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var pi = 3.141592653589793
var TS = 0;
var phi = 1.618033988749894
var nil = ['nil']
var coin = ['Heads', 'Tails']
var coina = ['heads', 'tails']

var stuff = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','r/jacobfunnies','RetroJBOT','Say ojchan, and i will kill you.','Minecraft','with you','with fire','nilbot is shit','01337 is the best','RetroJ','UwU','OwO','XwX','>W>','<W<','<w>','>w<','aaaaaaaaaaaaa','j.help','j.say','j.nsay','j.eval','j.8ball','j.9ball','j.','Javascript','with j.help','MEE6? We dont need that shit.','no','yes','maybe','wat','news','discord','Discord','js','discord.js','Discord.js','Discord.JS','discord.JS','.js','AAAAAAAAAAAAAAAAA','j.invite','0','1','2','3','4','5','6','7','8','9','10','.','..','...','...!','..!','.!','!','?','!?','h','69','69 is funni','w93 is trash','AAAAAAAAAAAAAAAAAAA','j.calc','j.die','funny','comendy','funni','j.about','trust me, there is nO easter egg tO this message Just tRust me Please. why not solve that easter egg in j.about instead of finding one in this message?','ok','okay','this message will change after 10 seconds','f in the chat','in','the','chat','as','know','right','left','up','down','to','two','too','one','three','four','for','five','six','seven','eight','nine','ten','numbers','num','top','bottom','//','wat','what','wot','desktop','stop','go','slow','slowdown','eee','ee','mom','dad','j.about ojproj','j.feedback','j.help','j.ping','j.ban','j.kick','j.purge','hahah','j.tw','j.inspirobot','nut','nat','nutnat','x','!','i','bot','Bot','Bot.js','bot.js','JS','NOOOOOOOOOOOO','YEEEEEEEEEEEEEEEEES','stuff','apple','again','edition','nilbot','gaming','code','coding','Heads', 'Tails','zzz','zz','zee','ze','Todays News: Fortnite is dead','Playing','j.','fart','use me pls :(','lol','LOL','OMG','omg','Todays News: Nothing new today','Todays News: Todays News','Todays News: ','Todays News: i am a bot','i am a bot','I always spit out random stuff in here.','MMMMMMMMMMMMMMMMMMMMMMMMMMMMM','j.ss','toot','too','to','Does anyone even read this?','Nobody reads this because I alwaus spit out random nonsense shit.','Todays News: 01337 bot is fighting 12bot! who will win?','Todays News: It has been confirmed that sex is not real.','Todays News: Something','with j.help','with you','with fire','j.tw','j.error','Todays News: A donut appeared for no reason','j.undertale','j.gay','j.hi','j.hello','j.eval','j.retrojbot','j.news','Todays News: If you want real news about the bot, do j.news','j.shrek','j.winxp','Nothing','Among Us','j.cp0','j.dice','j.donut','j.ss','j.invite']
//client.on('message', (message) => antiSpam.message(message));
function textC(text, font, color, size, stroke, other, otherEND) {
  e.height = size || 30
  e.width = 200
  font = font || '20px Comic Sans MS'
  c.font = font
  if (other) {
    other(c)
  }
  if (!stroke) {
    c.fillStyle = color || 'white'
    c.fillText(text, 0, +(font.split('px')[0]), 200)
  } else {
    c.strokeStyle = color || 'white'
    c.strokeText(text, 0, +(font.split('px')[0]), 200)
  }
  if (otherEND) {
    otherEND(c)
  }
  return e.toDataURL('image/jpg', 0.5)
}

//var readline = require('readline');

var uselessweb = [
  ["http://heeeeeeeey.com/"],
  ["http://tinytuba.com/"],
  ["http://corndog.io/"],
  ["http://thatsthefinger.com/"],
  ["http://cant-not-tweet-this.com/"],
  ["http://weirdorconfusing.com/"],
  ["http://blank.org/"],
  ["http://example.com/"],
  ["http://example.org/"],
  ["http://example.net/"],
  ["http://eelslap.com/"],
  ["http://www.staggeringbeauty.com/"],
  ["http://burymewithmymoney.com/"],
  ["http://endless.horse/"],
  ["https://theuselessweb.com/"],
  ["http://www.trypap.com/"],
  ["http://www.republiquedesmangues.fr/"],
  ["http://www.movenowthinklater.com/"],
  ["http://www.partridgegetslucky.com/"],
  ["http://www.rrrgggbbb.com/"],
  ["http://beesbeesbees.com/"],
  ["http://www.koalastothemax.com/"],
  ["http://www.everydayim.com/"],
  ["http://randomcolour.com/"],
  ["http://cat-bounce.com/"],
  ["http://chrismckenzie.com/"],
  ["http://hasthelargehadroncolliderdestroyedtheworldyet.com/"],
  ["http://ninjaflex.com/"],
  ["http://ihasabucket.com/"],
  ["http://corndogoncorndog.com/"],
  ["http://www.hackertyper.com/"],
  ["https://pointerpointer.com"],
  ["http://imaninja.com/"],
  ["http://www.ismycomputeron.com/"],
  ["http://www.nullingthevoid.com/"],
  ["http://www.muchbetterthanthis.com/"],
  ["http://www.yesnoif.com/"],
  ["http://iamawesome.com/"],
  ["http://www.pleaselike.com/"],
  ["http://crouton.net/"],
  ["http://corgiorgy.com/"],
  ["http://www.wutdafuk.com/"],
  ["http://unicodesnowmanforyou.com/"],
  ["http://www.crossdivisions.com/"],
  ["http://tencents.info/"],
  ["http://www.patience-is-a-virtue.org/"],
  ["http://whitetrash.nl/"],
  ["http://www.theendofreason.com/"],
  ["http://pixelsfighting.com/"],
  ["http://isitwhite.com/"],
  ["http://onemillionlols.com/"],
  ["http://www.omfgdogs.com/"],
  ["http://oct82.com/"],
  ["http://chihuahuaspin.com/"],
  ["http://www.blankwindows.com/"],
  ["http://dogs.are.the.most.moe/"],
  ["http://tunnelsnakes.com/"],
  ["http://www.trashloop.com/"],
  ["http://www.ascii-middle-finger.com/"],
  ["http://spaceis.cool/"],
  ["http://www.donothingfor2minutes.com/"],
  ["http://buildshruggie.com/"],
  ["http://buzzybuzz.biz/"],
  ["http://yeahlemons.com/"],
  ["http://burnie.com/"],
  ["http://wowenwilsonquiz.com"],
  ["https://thepigeon.org/"],
  ["http://notdayoftheweek.com/"],
  ["http://www.amialright.com/"],
  ["```¯¯\\_(ツ)_/¯¯ Wow! you found the shrug easter egg!```"],
  ["http://nooooooooooooooo.com/"]
];
var inquotes = ['http://generated.inspirobot.me/082/aXm7345xjU.jpg', 'http://generated.inspirobot.me/082/aXm3437xjU.jpg', 'http://generated.inspirobot.me/083/aXm3704xjU.jpg', 'http://generated.inspirobot.me/084/aXm5668xjU.jpg', 'http://generated.inspirobot.me/086/aXm5258xjU.jpg', 'http://generated.inspirobot.me/083/aXm4342xjU.jpg', 'http://generated.inspirobot.me/086/aXm3614xjU.jpg', 'http://generated.inspirobot.me/082/aXm8948xjU.jpg', 'http://generated.inspirobot.me/082/aXm8466xjU.jpg', 'http://generated.inspirobot.me/086/aXm7608xjU.jpg', 'http://generated.inspirobot.me/085/aXm9191xjU.jpg', 'http://generated.inspirobot.me/082/aXm7315xjU.jpg', 'http://generated.inspirobot.me/084/aXm777xjU.jpg', 'http://generated.inspirobot.me/083/aXm8469xjU.jpg ', 'http://generated.inspirobot.me/085/aXm1138xjU.jpg', 'http://generated.inspirobot.me/083/aXm609xjU.jpg', 'http://generated.inspirobot.me/084/aXm8616xjU.jpg', 'http://generated.inspirobot.me/082/aXm7407xjU.jpg', 'http://generated.inspirobot.me/082/aXm4866xjU.jpg', 'http://generated.inspirobot.me/084/aXm9385xjU.jpg', 'http://generated.inspirobot.me/084/aXm616xjU.jpg', 'http://generated.inspirobot.me/082/aXm2494xjU.jpg', 'http://generated.inspirobot.me/084/aXm3446xjU.jpg', 'http://generated.inspirobot.me/082/aXm1953xjU.jpg', 'http://generated.inspirobot.me/086/aXm3823xjU.jpg', 'http://generated.inspirobot.me/086/aXm2976xjU.jpg', 'http://generated.inspirobot.me/084/aXm5790xjU.jpg', 'http://generated.inspirobot.me/082/aXm9536xjU.jpg', 'http://generated.inspirobot.me/085/aXm8797xjU.jpg', 'http://generated.inspirobot.me/083/aXm3915xjU.jpg', 'http://generated.inspirobot.me/084/aXm7948xjU.jpg', 'http://generated.inspirobot.me/084/aXm4712xjU.jpg', 'http://generated.inspirobot.me/083/aXm7339xjU.jpg', 'http://generated.inspirobot.me/085/aXm4343xjU.jpg', 'http://generated.inspirobot.me/082/aXm4378xjU.jpg', 'http://generated.inspirobot.me/086/aXm9375xjU.jpg', 'http://generated.inspirobot.me/083/aXm8764xjU.jpg', 'http://generated.inspirobot.me/084/aXm4352xjU.jpg', 'http://generated.inspirobot.me/082/aXm9301xjU.jpg', 'http://generated.inspirobot.me/086/aXm5607xjU.jpg', 'http://generated.inspirobot.me/085/aXm7718xjU.jpg', 'http://generated.inspirobot.me/083/aXm4064xjU.jpg', 'http://generated.inspirobot.me/085/aXm475xjU.jpg', 'http://generated.inspirobot.me/082/aXm8025xjU.jpg', 'http://generated.inspirobot.me/085/aXm9747xjU.jpg', 'http://generated.inspirobot.me/083/aXm7781xjU.jpg', 'http://generated.inspirobot.me/083/aXm8086xjU.jpg', 'http://generated.inspirobot.me/083/aXm146xjU.jpg', 'http://generated.inspirobot.me/084/aXm1748xjU.jpg', 'http://generated.inspirobot.me/086/aXm2124xjU.jpg', 'http://generated.inspirobot.me/082/aXm3391xjU.jpg', 'http://generated.inspirobot.me/085/aXm750xjU.jpg', 'http://generated.inspirobot.me/082/aXm7586xjU.jpg', 'http://generated.inspirobot.me/083/aXm4917xjU.jpg', 'http://generated.inspirobot.me/083/aXm4478xjU.jpg', 'http://generated.inspirobot.me/082/aXm432xjU.jpg', 'http://generated.inspirobot.me/082/aXm310xjU.jpg', 'http://generated.inspirobot.me/082/aXm3204xjU.jpg', 'http://generated.inspirobot.me/085/aXm9885xjU.jpg', 'http://generated.inspirobot.me/086/aXm1861xjU.jpg', 'http://generated.inspirobot.me/084/aXm2071xjU.jpg', 'http://generated.inspirobot.me/083/aXm381xjU.jpg', 'http://generated.inspirobot.me/084/aXm7015xjU.jpg', 'http://generated.inspirobot.me/084/aXm4260xjU.jpg', 'http://generated.inspirobot.me/083/aXm7656xjU.jpg', 'http://generated.inspirobot.me/084/aXm4358xjU.jpg', 'http://generated.inspirobot.me/084/aXm3466xjU.jpg', 'http://generated.inspirobot.me/084/aXm9606xjU.jpg', 'http://generated.inspirobot.me/082/aXm8334xjU.jpg', 'http://generated.inspirobot.me/084/aXm6201xjU.jpg', 'http://generated.inspirobot.me/085/aXm6812xjU.jpg', 'http://generated.inspirobot.me/082/aXm7582xjU.jpg', 'http://generated.inspirobot.me/082/aXm9099xjU.jpg', 'http://generated.inspirobot.me/082/aXm1668xjU.jpg', 'http://generated.inspirobot.me/086/aXm7839xjU.jpg', 'http://generated.inspirobot.me/083/aXm4292xjU.jpg', 'http://generated.inspirobot.me/085/aXm1521xjU.jpg', 'http://generated.inspirobot.me/085/aXm7627xjU.jpg', 'http://generated.inspirobot.me/083/aXm7929xjU.jpg', 'http://generated.inspirobot.me/086/aXm923xjU.jpg', 'http://generated.inspirobot.me/086/aXm2513xjU.jpg', 'http://generated.inspirobot.me/084/aXm7383xjU.jpg', 'http://generated.inspirobot.me/086/aXm2813xjU.jpg', 'http://generated.inspirobot.me/084/aXm6831xjU.jpg', 'http://generated.inspirobot.me/083/aXm2065xjU.jpg'] //less quotes
var LMoS = 0;
var balla = ['Yes.', 'No.', 'I think so.', 'Maybe?', 'Ask again later.', 'Pretty sure.', 'Not at all.', 'Probably.', 'Probably not.', 'I think so?', 'Not that I remember.']
var ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
var balln = ['Your Fired!', 'Your Hired!']
var eegg = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'https://miro.medium.com/max/455/1*snTXFElFuQLSFDnvZKJ6IA.png', '', '', '', '', '', '', '', '']
var eegga = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Fix your shit, jacob.', 'Critical Shit!', '', '', '', '', '', '', '']
var eeggtwo = ['Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Can you please stop spamming this command?', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'Error: Nothing Found.', 'There is litterally nothing in here.', 'Error: Nothing Found.']
var counter = 0;
var test = 0;
var dicea = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

/*/
setInterval(function(){
	TS += 0.1
},100)

function getAvarage(array){
      var e = 0;
    for(let i = 0;i < array.length;i++){
        e = e + array[i]
    }
      return Math.round(e / array.length)
}

/*/





const Discord = require("discord.js");
const client = new Discord.Client();
const { inspect } = require('util');
client.login("NjEyNzQyNjYwNjU4MTY3ODQw.XVmzEg.Y9ys6ICRv1dhklY6txKYtyfGA9o");
client.on('ready', () => {
  console.log("[INFO] Logged in to discord"); 
  setInterval(() => {
    const index = Math.floor(Math.random() * (stuff.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
    client.user.setActivity(stuff[index]); // sets bot's activities to one of the phrases in the arraylist.
}, 10000); // Runs this every 10 seconds
});
String.prototype.removepings = function() {
    return this
        .replace(/(@(?:everyone|here))/gi, 'no') //@everyone/here ping
        .replace(/<@&(\d+)>/gi, "no") //role ping
        .replace(/<@!?(\d+)>/gi, "no") //user ping
};
String.prototype.rpremovepings = function() {
    return this
        .replace(/(@(?:everyone|here))/gi, 'no')
        .replace(/<@&(\d+)>/gi, "no")
        .replace("nigger", "no")
        .replace("Nigger", "no")
};
String.prototype.aremovepings = function() {
  return this
      .replace('`', '\'')
      .replace(/<@&(\d+)>/gi, "no")
      .replace(/(@(?:everyone|here))/gi, 'no')
      .replace(/<@&(\d+)>/gi, "no")
      .replace("nigger", "no")
      .replace("Nigger", "no")
};
String.prototype.aremovepings = function() {
  return this
      .replace('`', '\'')
      .replace(/<@&(\d+)>/gi, "(a)")
      .replace(/(@(?:everyone|here))/gi, '(a)')
      .replace(/<@&(\d+)>/gi, "no")
};
client.on("message", async function (message) {
  if (message.author.bot) {
  console.log("[WARN] The member that was calling me is a bot. Bot user is ignored.")
  return;
  }
  if (message.content.startsWith("j.ping")) {
    message.channel.send(":ping_pong: Pong!  " + Math.floor(client.ws.ping) + 'ms');
    console.log("[MSG] :ping_pong: Pong!  " + Math.floor(client.ws.ping) + 'ms');
    return;
  }
  if (message.content.startsWith("j.test")) {
    message.channel.send("Testing... it works");
    console.log("[MSG] Testing... it works");
    return
  }
  if (message.content.startsWith("j.phone")) {
    message.channel.send(":telephone: Calling...");
    //setTimeout(function(){          message.channel.send(":warning: **403 ERROR. Your request was denied.** The service is privated. Please ask the creator (jacobw#8117) if you need to get access to this service");     }, 30000);
    // setTimeout(function(){          message.channel.send(":x: ***RetroJPhone servers are down at the moment.***\n ```js\n This service has been discontinued. \n\n\n\n\nThank you for using this service.```");     }, 10000);
    console.log("[MSG] Calling...");
    message.channel.send("You are connected to the server: `Unknown`");
    message.channel.send("Ping: " + Math.floor(client.ws.ping) + 'ms');
    setTimeout(function () { message.channel.send(":telephone_receiver: **RetroJBOT#0000**: We are sorry, but the phone system has not been implemented yet."); }, 1000);
    setTimeout(function () { message.channel.send(":telephone_receiver: **RetroJBOT#0000**: For further assistence, please dm Jacobw#8117."); }, 10000);
    setTimeout(function () { message.channel.send(":telephone_receiver: **RetroJBOT#0000**: Goodbye."); }, 20000);
    setTimeout(function () { message.channel.send(":telephone: They hung up"); }, 30000);
    return
  }
  if (message.content.startsWith("j.emojitest")) { //759914061696860202
    message.channel.send('<a:Loading_Color:759914061696860202>');
    console.log('[MSG] <a:Loading_Color:759914061696860202>');
    return
  }  if (message.content.startsWith("j.play ")) { //759914061696860202
    let thingtosend = message.content.slice(7).removepings()
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play(ytdl(thingtosend, { filter: 'audioonly' }));
    message.channel.send("*VHS Tape being inserted* :arrow_forward: **Playing**");
  }
  if (message.content.startsWith("j.stop")) { //759914061696860202
    const connection = await message.member.voice.channel.leave();
    message.channel.send("*VHS Tape being ejected* :stop_button: **Stopped...**");
  }
  if (message.content.startsWith("j.news")) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      msg.delete();
    });
    message.channel.send('https://cdn.discordapp.com/attachments/678402819937796113/759548670772772864/vglitch.png');
    message.channel.send('>>> **8.0.33** - Added j.claptext <text>')
    message.channel.send('You are running version v' + version)
    return;
  }
  if (message.content.startsWith('j.nsay ')) { //checks for j.nsay
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return;
    }
    let thingtosend = message.content.slice(7).removepings()
    //message.channel.send(':x: this command is disabled.')
    message.delete().catch(_O_o => { }); //deletes previous messages. Sneaky, Sneaky, right?
    // let thingtosend = message.content.slice(7).replace(/(@(?:everyone|here))/gi, 'nope')
    if (thingtosend != '') message.channel.send(thingtosend) //sends the message
    console.log(message.content.slice(7))
    return;
  }
  if (message.content.startsWith('j.say ')) { //checks for j.say
    //message.channel.send(':x: this command is disabled.')
    let thingtosend = message.content.slice(6).removepings()
    if (thingtosend != '') message.channel.send(thingtosend) //sends the message
    console.log(message.content.slice(6))
    return;
  }
  if (message.content === "j.shrek") {
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return;
    }
    message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
      message.channel.createWebhook('Shrek', { avatar: 'https://cdn.discordapp.com/avatars/757068148511080529/c986c8cde4521200fe42540acec0fba0.png?size=1024' }).then(webhook => {
        console.log('[MSG] <a:Loading_Color:759914061696860202>');
        const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
        webhooksend.send('I AM SHREK')
          .then(() => webhook.delete());
        msg.delete();
      });
    });
  }
  if (message.content === "j.winxp") {
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return;
    }
    message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
      message.channel.createWebhook('Windows XP', { avatar: 'https://cdn.discordapp.com/avatars/757068117846523954/4881f167d7db8fc35b20f8cd3b014613.png?size=1024' }).then(webhook => {
        console.log('[MSG] <a:Loading_Color:759914061696860202>');
        const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
        webhooksend.send('Windows XD')
          .then(() => webhook.delete());
        msg.delete();
      });
    });
  }
  if (message.content === "j.42") {
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return;
    }
    message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
      message.channel.createWebhook('System42', { avatar: 'https://cdn.discordapp.com/avatars/480276421252612098/98426f23b3bfab6b0cd8c00e2da3750b.png?size=1024' }).then(webhook => {
        console.log('[MSG] <a:Loading_Color:759914061696860202>');
        const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
        webhooksend.send('𝓘 𝓽𝓱𝓲𝓷𝓴 𝓷𝓸𝓽.')
          .then(() => webhook.delete());
        msg.delete();
      });
    });
  }
  if (message.content.startsWith("j.inspirobot")) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
      require('https').get('https://inspirobot.me/api?generate=true', function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
      msg.delete();
      return;
    });
  }
  if (message.content.startsWith("j.tw ")) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
      require('http').get('http://api.img4me.com/?font=sans&fcolor=000000&size=35&type=png&text=' + message.content.slice(5), function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
      msg.delete();
      return;
    });
  }
  if (message.content.startsWith("j.cook ")) {
    let thingtosend = message.content.slice(7).rpremovepings()
    const percentages = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '99']; //change const to var for now
    if (thingtosend.toLowerCase() == "turkey") {
      message.channel.send('https://web.archive.org/web/20091019002253if_/http://sg.geocities.com/tanwunhui/roasted_turkey.gif')
    }
    message.channel.send('<a:Loading_Color:759914061696860202> **COOKING** ' + thingtosend + ' - 0%').then(cook => {
      let i = 0;
      let interval = setInterval(function () {
        if (i >= percentages.length) {
          cook.edit('**DONE COOKING** Successfully cooked ' + thingtosend + '!');
          clearInterval(interval);
          return;
        }
        cook.edit('<a:Loading_Color:759914061696860202> **COOKING** ' + thingtosend + ' - ' + percentages[i] + '%');
        i++;
      }, 1000);
    });
  }
  /*if (message.content.startsWith("j.oldinspirobot")) {
    message.channel.send(inquotes[Math.floor(Math.random()*inquotes.length)]);  
    console.log('[MSG] [INFO] Old Quotes');
  }*/
  if (message.content.startsWith("j.confirmtest")) {
    message.react('👍').then(() => message.react('👎'));

    const filter = (reaction, user) => {
      return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
          message.reply('you reacted with a thumbs up.');
        } else {
          message.reply('you reacted with a thumbs down.');
        }
      })
      .catch(collected => {
        message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
      });
  }
  if (message.content.startsWith("j.countsa")) {
    message.channel.send(counter);
    console.log('[MSG]' + counter);
    return
  }
  if (message.content.startsWith("j.unixtime")) {
    const unixTime = Math.floor(Date.now() / 1000);
    message.channel.send("🕒 " + unixTime)
    return
  }
  if (message.content.startsWith("j.donut")) {
    var doughnuts = ["🍩", "<:american_donut:502294189048987648>"]
    var str = doughnuts[Math.floor(Math.random() * doughnuts.length)]
    message.react(str);
    message.channel.send("Have a donut: " + str)
    console.log("Have a donut: " + str)
    return
  }
  if (message.content.startsWith('j.poll ')) {
    message.react('✅').then(() => message.react('❌'))
  }//https://aws.random.cat/meow
  if (message.content.startsWith('j.dog')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.dog().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.fox')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.fox().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.hello')) {
    message.channel.send('Hi!')
  }
  if (message.content.startsWith('j.bird')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.bird().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.cat')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.cat().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.bunny')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.bunny().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.lizard')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.lizard().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.owl')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.owl().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.tiger')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.tiger().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.shiba')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.shiba().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.lion')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.lion().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.duck')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.duck().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.redpanda')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.redpanda().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.penguin')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.penguin().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith('j.panda')) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading*').then(msg => {
      console.log('[MSG] <a:Loading_Color:759914061696860202> *Loading*');
      animals.panda().then(url => message.channel.send(url))
      msg.delete();
    });
  }
  if (message.content.startsWith("j.addsac")) {
    counter++;
    message.channel.send(counter);
    console.log('[MSG]' + counter);
    return
  }
  if (message.content.startsWith("j.help")) {
    message.reply('Check DM!');
    var helpa = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('General commands')
      .setDescription('commands that do general things')
      .addFields(
        { name: 'j.help', value: 'Shows a list of commands', inline: true },
        { name: 'j.ping', value: 'Pong!', inline: true },
        { name: 'j.about', value: 'About the bot', inline: true },
        { name: 'j.test', value: 'Test the commands', inline: true },
        { name: 'j.reactiontest', value: 'Test the reactions.', inline: true },
        { name: 'j.emojitest', value: 'Test gif emojis', inline: true },
        { name: 'j.news', value: 'Get the latest bot news.', inline: true },
        { name: 'j.version', value: 'Version that the bot is in', inline: true },
        { name: 'j.feedback <text>', value: 'send feedback', inline: true },
        { name: 'j.privatefeedback <text>', value: 'send feedback but anonymouse', inline: true },
      )
    var helpa = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Image commands')
      .setDescription('')
      .addFields(
        { name: 'j.undertale <text> ([<text>=<text>])', value: 'Make a undertale text box! For adjusting its properties, please visit this site https://urls.ziad87.net/pRlJD0 (Warning: Its pretty confusing), for other help on the api, https://urls.ziad87.net/eBYq4 **If image doesnt appear, but the link does, Open the link to see the image, or try again.**', inline: true },
        { name: 'j.tw <text>', value: 'Typewriter font!', inline: true },
        { name: 'j.inspirobot', value: 'Get a quote from Inspirobot', inline: true },
        { name: 'j.error <text>', value: 'make an error', inline: true },
        { name: 'j.steamemote <steam emote name>', value: 'get a steam emote. when it shows a link, it means the emote doesn\'t exist.', inline: true },
      )
    var helpb = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Moderation Commands')
      .setDescription('')
      .addFields(
        { name: 'j.ban^ <user>', value: 'Forces a user to leave but cant join back', inline: true },
        { name: 'j.kick^ <user>', value: 'Forces a user to leave', inline: true },
        { name: 'j.purge^ <number>', value: 'purges the number of messages that is inputed in.', inline: true },
      ) //
      .setTimestamp()
    var helpf = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Fun Commands')
      .setDescription('Commands that are fun (1/2)')
      .addFields(
        { name: 'j.8ball [whatever u want]', value: 'Shake the magic 8ball!', inline: true },
        { name: 'j.9ball [question]', value: 'just an old version of the 8ball. nothing really special', inline: true },
        { name: 'j.69ball [question]', value: 'Lws funny ball!!1111', inline: true },
        { name: 'j.yesno [question]', value: 'Only ask a yes or no question, just like the 8ball', inline: true },
        { name: 'j.lol', value: 'Says Haha Funny!', inline: true },
        { name: 'j.hi', value: 'Says hello. j.hello works as well.', inline: true },
        { name: 'j.owo', value: 'Says Whats this?', inline: true },
        { name: 'j.oof', value: '**I am pissed.**', inline: true },
        { name: 'j.countsa', value: 'See how much there is in the commuity counter', inline: true },
        { name: 'j.addsac', value: 'Add +1 to the commuity counter.', inline: true },
        { name: 'j.donothing', value: 'A command that doesnt do anything', inline: true },
        { name: 'j.emojitest', value: 'Test emojis on the bot', inline: true },
        { name: 'j.ss <message>', value: 'Send a message to our server. **If you post any nsfw, you will be banned from using j.ss without any warning (j.seversend can work as well)**', inline: true },
        { name: 'j.dice [number]', value: 'Roll the dice!', inline: true },
        { name: 'j.coinflip [(tails|heads)]', value: 'Tails or heads?', inline: true },
        { name: 'j.d20', value: 'Rolls a d20.', inline: true },
        { name: 'j.s1', value: 'generates random shit to make nonsese', inline: true },
        { name: 'j.gay <anything you want>', value: '*how gay are you?*', inline: true },
        { name: 'j.rate <anything>', value: 'Let me rate something!', inline: true },
        //   { name: '~~j.penisscale~~', value: '~~How long is the size of your dick? [Might be removed.]~~', inline: true},
        { name: 'j.HALPMEIHAVETOOMANYDONUTSPLSS', value: 'AAAAAAAAAAA TOO MANY DOUGHNUTS!!!', inline: true },
        { name: 'j.winxp', value: 'WINDOWS XD. This command was from 12bot. Sadly, they didnt have it on 01337, and its now here for nostaliga.', inline: true },
        { name: 'j.shrek', value: 'I AM SHREK. This command was from 12bot. Sadly, they didnt have it on 01337, and its now here for nostaliga', inline: true },
        { name: 'j.cook <text>', value: 'Cook something.', inline: true },
        { name: 'j.td [(true|dare)]', value: 'Truth or dare?', inline: true },
        { name: 'j.cards', value: 'Get a random card', inline: true },
        { name: 'j.surprise', value: 'is the monstercat show up at the box?', inline: true }
      )
    var helpg = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Fun Commands')
      .setDescription('Commands that are fun (2/2)')
      .addFields(
        { name: 'j.donut', value: 'Have a donut!', inline: true },
        { name: 'j.42', value: 'Just another old command from 12bot.', inline: true },
      )
    var helpd = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Animal Commands')
      .setDescription('Shows cute photos of animals. For some reason some of them are broken :(')
      .addFields(
        { name: 'j.dog', value: 'Gets a dog photo', inline: true },
        { name: 'j.cat', value: 'Gets a cat photo', inline: true },
        { name: 'j.fox', value: 'Gets a random fox boi', inline: true },
        { name: 'j.honk', value: 'Gets a desktop goose meme.', inline: true },
        { name: 'j.bird', value: 'Gets a bird photo', inline: true },
        { name: 'j.lizard', value: 'Gets a lizard', inline: true },
        { name: 'j.tiger', value: 'Gets a random tiger boi.', inline: true },
        { name: 'j.owl', value: 'Gets a random owl boi! OwOl', inline: true },
        { name: 'j.shiba', value: 'gets a shiba', inline: true },
        { name: 'j.redpanda', value: 'gets a red panda', inline: true },
        { name: 'j.panda', value: 'gets a panda', inline: true },
        { name: 'j.penguin', value: 'gets a penguin', inline: true },
      )
      .setTimestamp()
    var helpe = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Roleplay commands')
      .setDescription('Some roleplay commands i put for no reason')
      .addFields(
        { name: '~~j.fuck <user or something>~~', value: '~~Just... Dont...~~', inline: true },
        { name: 'j.hug <user or something', value: 'Hug someone!', inline: true },
        { name: 'j.snuggle <someone or idk>', value: 'Snuggle Someone!', inline: true },
        { name: 'j.kill <user or something>', value: 'Kill someone... oh boi.', inline: true },
        { name: 'j.slap <user or something>', value: 'Slap Someone!', inline: true },
        { name: 'j.angry/j.mad', value: 'ARE YA ANGRY?!', inline: true },
        { name: 'j.sad', value: 'show that you are sad', inline: true },
        { name: 'j.happy', value: 'Cheerful, Lighthearted, Emotion!', inline: true },
        { name: 'j.nuzzle <text>', value: 'Nuzzle Someone!', inline: true },
        { name: 'j.microwave <text>', value: 'Throw someone in the microwave!', inline: true },
        { name: 'j.revive <text>', value: 'Revive someone!', inline: true },
        { name: 'j.distract <text>', value: 'Distract Someone!', inline: true },
      )
      .setTimestamp()
    var helpx = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Utilities commamds')
      .setDescription('I guess im useful after all.')
      .addFields(
        { name: 'j.calc <your math problem>', value: 'Calculates your math.', inline: true },
        { name: 'j.time', value: 'Tells you the time. Not accurate!', inline: true },
        { name: 'j.date', value: 'Tells you the date. Not accurate...?', inline: true },
        { name: 'j.itc <#>', value: 'Converts inches to centermeters, I think?', inline: true },
        { name: 'j.ctf <#>', value: 'C degrees to F degrees', inline: true },
        { name: 'j.ftc <#>', value: 'F degrees to C degrees', inline: true },
        { name: 'j.guildid', value: 'View the guild id.', inline: true },
        { name: '~~j.msgsent~~', value: '~~see how much messages u sent~~', inline: true },
        { name: '~~j.wiki <search>~~', value: '~~Search on wikipedia~~', inline: true },
        { name: 'j.unixtime', value: 'Whats the unix time?', inline: true }
      )
      .setTimestamp()
    var helpc = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Bot admin commands')
      .setDescription('These commands are none of your buiness. Literally.')
      .addFields(
        { name: '6', value: '**BOT ADMIN COMMANDS**', inline: false },
        { name: 'j.eval^^^ <user or something>', value: 'Test Code on the bot', inline: true },
        { name: 'j.req', value: 'Reqest bot admin, or detects to see if you have bot admin', inline: true },
        { name: 'j.die^^^', value: 'Shuts down the bot', inline: true },
        { name: 'j.sban^^^', value: 'Bans someone off of Server Send.', inline: true },
        { name: 'j.live', value: 'T..Turns on the bot?', inline: true },
        { name: 'j.bogrant^^^', value: 'Grant a user bot admin', inline: true }
      )
      .setTimestamp()
    var helpc = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Text Edit Commands')
      .setDescription('Couldn\'t figure out what to call these commands.')
      .addFields(
        { name: 'j.uppercase (or j.uc) <text>', value: 'Changes all text to caps', inline: true },
        { name: 'j.lowercase (or ls) <text>', value: 'changes all text to lowercase', inline: true },
        { name: 'j.say <text>', value: 'Makes the bot say something', inline: true },
        { name: 'j.nsay <text>', value: 'Makes the bot say something, then deletes your message afterwards', inline: true },
        { name: 'j.scramble <text>', value: 'Scrambles the text.', inline: true },
        { name: 'j.thot <text>', value: 'BEGONE THOT!', inline: true },
        { name: 'j.vaporwave <text>', value: 'Spaces your text on every character. l i k e  t h i s.', inline: true },
        { name: 'j.claptext <text>', value: 'Writes👏your👏text👏like👏this.', inline: true },
      )
      .setTimestamp()

    var helph = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('Game Commands')
      .setDescription('Games that should keep you busy.')
      .addFields(
        { name: 'j.cp0 (<heads|tails>)', value: 'j.coinflip, but you have to guess it.', inline: true },
      )
      .setTimestamp()
    var helpi = new Discord.MessageEmbed()
      .setColor('#00b7ff')
      .setTitle('[EXPERMENTAL] Music commands')
      .setDescription('These Commands are currently WIP. Please play music by pasting a link from yt. not by keyword. (playing ')
      .addFields(
        { name: 'j.play <youtube url>', value: 'Play Music', inline: true },
        { name: 'j.stop', value: 'Stop Music', inline: true },
      )
      .setTimestamp()


    message.author.send(helpa);
    message.author.send(helpb);
    message.author.send(helpc);
    message.author.send(helpd);
    message.author.send(helpx);
    message.author.send(helpe);
    message.author.send(helpf);
    message.author.send(helpg);
    message.author.send(helph);
    message.author.send(helpi)
    message.author.send("`<arc>` -- This means that this argument is REQUIRED.\n`[arc]` -- this means that NOT REQUIRED\n~~striked text~~ -- this means that this command is disabled or WIP.\n`(<arc>)` -- Required, but only that text.\n`([arc])` -- Not required, but only that text\n`(<arc|arc2>)` -- Required, but the | means that have you to choose one of them.\n`([arc|arc2])` -- Not Required, but the | means that have you to choose one of them.\n`^` -- This means that the bot command requires some sort of admin permission\n`^^` -- This means that it requires server owner\n`^^^` -- This means that it requires bot admin.");
    return
  }
  if (message.content.startsWith("j.8ball")) {
    var c = ball[Math.floor(Math.random() * ball.length)]
    message.channel.send(":8ball: " + c);
    console.log('[MSG] :8ball:' + c);
    return
  }
  if (message.content.startsWith("j.9ball")) {
    var b = balla[Math.floor(Math.random() * aball.length)]
    message.channel.send(":8ball: " + b);
    console.log('[MSG] :8ball: ' + b);
    return
  }//
  if (message.content.startsWith("j.claptext ")) {
    let thingtosend = message.content.slice(`11`).rpremovepings().replace(/ /g, '👏');
    message.channel.send(thingtosend)
    return
  }
  if (message.content.startsWith("j.wiki ")) {
    message.channel.send(":x: Work in progress.")
    //let thingtosend = message.content.slice(7).removepings()
    //message.channel.send(wiki('https://en.wikipedia.org/wiki').page(thingtosend).then(page => page.summary()))
    return
  }
  if (message.content.startsWith("j.surprise")) {
    var mcboxboi = [':package: ...', ':package: *He isnt home*', ':package: *Nothing is inside this box. You probably picked up the wrong box...*', ':package: *Nope. Not Home.*', ':package: *He isnt in there.*', ':package:', '<:MonsterCatsBox:765741159560511529> Surprise!', ':package: *You hear him making music inside this box. Its best not to distract him.*', '<:MonsterCatsBox:765741159560511529>']
    var mcboxboy = mcboxboi[Math.floor(Math.random() * mcboxboi.length)]
    message.channel.send(mcboxboy);
    console.log('[MSG]' + mcboxboy)
    return
  }
  if (message.content.startsWith("j.dice")) {
    let thingtosend = message.content.slice(7).rpremovepings()
    if (message.content.substring(6) === "") {
      message.channel.send('🎲 ' + Math.floor(Math.random() * 6))
    } else {
      dice = Math.floor(Math.random() * message.content.slice(7))
      message.channel.send('🎲 ' + dice)
      return
    }
  }
  if (message.content.startsWith("j.itc ")) {
    imp = message.content.slice(6)
    if (imp.includes('\'')) {
      bothU = imp.split('\'')
      feet = bothU[0]
      feet = Number(feet)
      inch = bothU[1]
      inch = inch.replace(/\"/g, '')
      inch = Number(inch)
    } else {
      feet = 0
      inch = imp
      inch = imp.replace(/\"/g, '')
      inch = Number(inch)
    }
    ftinchfinal = (feet * 30.48) + (inch * 2.54)
    message.channel.send(':straight_ruler: ' + ftinchfinal + 'cm')
    return
  }
  if (message.content.startsWith("j.ctf ")) {
    var cel = message.content.slice(6)
    var cel = Number(cel)
    celfinal = 32 + 1.8 * cel
    message.channel.send(':thermometer: ' + celfinal + '°F');
    console.log('[MSG] :thermometer: ' + celfinal + '°F');
    return
  }
  if (message.content.startsWith('j.ban')) {
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return;
    }
    if (message.author.bot) {
      message.channel.send(':x: no.');
    } else {
      if (!message.member.hasPermission("BAN_MEMBER")) {
        message.reply(':hammer: :noentry: Your permissions forbid you to ban someone.');
        return
      }
      //    if (permArray.indexOf(true) == -1) {
      //      message.reply('Your permissions forbid you to ban someone.');
      //      return
      //    } HAHAHA, THIS ONE I SHIT MY SELF ON. LOL

      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.ban('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(':hammer: ✅ `Successfully Banned Hammered`' + message.content.slice(6) + 'https://media1.tenor.com/images/ae83976e867ebc2722054a632ff045ad/tenor.gif?itemid=11035060');
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply(':x: I was unable to ban the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply(':x: That user isn\'t in this guild!');
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply(':warning: You didn\'t mention the user to ban!');
      }
      return
    }
  }
  if (message.content.startsWith('j.kick')) {
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return;
    }
    if (message.author.bot) {
      message.channel.send(':x: no.');
    } else {
      if (!message.member.hasPermission("KICK_MEMBER")) {
        message.reply('Your permissions forbid you to kick someone.');
        return
      }
      //    if (permArray.indexOf(true) == -1) {
      //      message.reply('Your permissions forbid you to ban someone.');
      //      return
      //    } HAHAHA, THIS ONE I SHIT MY SELF ON. LOL
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ` + message.content.slice(6));
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
      return
    }
  }
  /*/
   if (message.content.startsWith("j.admincommands")) {
     message.channel.send("Admin Commands: ``\nadmincommands -- shows this list\n die -- shutdown the bot\n eval -- Test code in the bot, not sand boxed.\n test -- test the bot message\n removesac -- removes the online counter\n clearsac -- clears the online counter\n login <password> -- Enter a password through client.login``\nsban <user id> prefix: `j.` Version A.D.M.I.N. Note: These commands can actully be found in the help commands too. Some of these command wont work beacause you dont have permission, or its left unfinished.");
     console.log('[MSGAL] [SUCCESS] Admins Command Sent!');
     return
   }
 /*/
  if (message.content.startsWith("j.hi")) {
    message.channel.send("Hello!");
    console.log('[MSG] Hello!');
    return
  }
  if (message.content.startsWith("j.slap ")) {
    let thingtosend = message.content.slice(7).rpremovepings()
    message.channel.send("*" + message.author.tag + " slapped " + thingtosend + " with a huge trout!*");
  }
  if (message.content.startsWith("j.hug ")) {
    let thingtosend = message.content.slice(6).rpremovepings()
    message.channel.send("*" + message.author.tag + " hugged " + thingtosend + " Awwww... UwU*");
  }
  if (message.content.startsWith("j.distract ")) {
    let thingtosend = message.content.slice(11).rpremovepings()
    message.channel.send("*" + thingtosend + " got distracted by " + message.author.tag + "!*");
    message.channel.send("https://cdn.discordapp.com/attachments/468916221975199745/744326878009229382/image0.gif");
  }
  if (message.content.startsWith("j.microwave ")) {
    let thingtosend = message.content.slice(12).rpremovepings()
    message.channel.send("*" + thingtosend + " was thrown in the microwave!*");
  }
  if (message.content.startsWith("j.fuck ")) {
    message.channel.send(":x: Command disabled.")
    /*/
          let thingtosend = message.content.slice(6).rpremovepings()
        message.channel.send("" + message.member.tag + "... what are you doing to" + message.content.slice(6) + "?! *gasp* Oh my... " + fuckgif[Math.floor(Math.random() * fuckgif.length)]);
    /*/
  }
  if (message.content.startsWith("j.kill ")) {
    let thingtosend = message.content.slice(6).rpremovepings()
    message.channel.send("*" + message.author.tag + " killed" + thingtosend + "!*");
  }
  if (message.content.startsWith("j.snuggle ")) {
    let thingtosend = message.content.slice(10).rpremovepings()
    message.channel.send("*" + message.author.tag + " snuggles" + thingtosend + "! How fluffy is their fur? OwO*");
  }
  if (message.content.startsWith("j.happy")) {
    message.channel.send("*" + message.author.tag + " is happy!*");
  }
  if (message.content.startsWith("j.sad")) {
    message.channel.send("*" + message.author.tag + " is sad... cheer up my friend.*");
  }
  if (message.content.startsWith("j.revive ")) {
    let thingtosend = message.content.slice(9).rpremovepings()
    message.channel.send("*" + message.author.tag + " revived " + thingtosend + "!*");
  }
  if (message.content.startsWith("j.angry")) {
    message.channel.send("*" + message.author.tag + " is so angry, that he smashed there keyboard and throwed it out of the window!*");
  }
  if (message.content.startsWith("j.mad")) {
    message.channel.send("*" + message.author.tag + " is so angry, that he smashed there keyboard and throwed it out of the window!*");
  }//
  if (message.content.startsWith("j.nuzzle ")) {
    let thingtosend = message.content.slice(8).rpremovepings()
    message.channel.send("*" + message.author.tag + " nuzzles " + thingtosend + "!*");
  }
  if (message.content.startsWith("j.error ")) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
      let thingtosend = message.content.slice(8).rpremovepings()
      message.channel.send("http://atom.smasher.org/error/xp.png.php?icon=Error3&title=Error&url=&text=" + encodeURIComponent(thingtosend) + "&b1=&b2=OK")
      msg.delete();
      return;
    });
  }
  if (message.content.startsWith("j.undertale ")) {
    let thingtosend = message.content.slice(12).rpremovepings()
    //message.channel.send("If image doesn't appear, but the link does, Open the link to see the image, or try again.")
    message.channel.send("https://www.demirramon.com/utgen.png?message=" + encodeURIComponent(thingtosend))
    //require('https').get('https://inspirobot.me/api?generate=true'+encodeURIComponent(thingtosend), function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
  }
  if (message.content.startsWith("j.steamemote ")) {
    //   message.channel.send('<a:Loading_Color:759914061696860202> *Please wait...*').then(msg => {
    let thingtosend = message.content.slice(13).removepings()
    message.channel.send("https://steamcommunity-a.akamaihd.net/economy/emoticon/" + encodeURIComponent(thingtosend))
    if (thingtosend === "") {
      message.channel.send(":octagonal_sign: Specify a name of a steam emote, Please.")
    }
    if (thingtosend === "_ _") {
      message.channel.send(":x: Um.. no?")
    }
    if (thingtosend === " ") {
      message.channel.send(":octagonal_sign: Stop it.")
    }
    if (thingtosend === "*** ***") {
      message.channel.send(":no_entry: no.")
    }
    if (thingtosend === ('porn') || thingtosend === ('penis') || thingtosend === ('ass')) {
      message.channel.send(":no_entry: Fuck off. You sick mind")
    }
    return;
  }
  if (message.content.startsWith("j.baka")) {
    let thingtosend = message.content.slice(6).rpremovepings()
    message.channel.send(':x: this command is disabled');
    //  message.channel.send("*Wtf someone is being an idiot*");
    //require('https').get('https://api.giphy.com/v1/gifs/random?q=ryan+gosling&api_key=1Mhg4tCyxhdXOtzaPFljuwdY2aAV2KV9&limit=1', function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
  }//http://api.giphy.com/v1/gifs/search?q={0}&api_key=dc6zaTOxFJmzC
  
  if (message.content.startsWith("j.penisscale ")) {
    message.channel.send(":x: Command disabled.")
    //    message.channel.send(message.content.slice(13) + " penis is this long: " + penisscale[Math.floor(Math.random() * penisscale.length)]);
  }
  if (message.content.startsWith("j.guildid")) {
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return
    }
    message.channel.send(message.guild.id);
    console.log('[MSG]' + message.guild.id);
    return
  }
  /*/
  if (message.content.startsWith("j.error ")) {
    if (message.content.substring(8) === " ") {
        message.channel.send(":warning: Due to the api being a dumpster with fire, you are gonna have to use the + symbol as a space. Sorry.")
      }
    var aaa = message.content.slice(8)
    var str = "http://atom.smasher.org/error/xp.png.php?icon=Error3&title=Error&url=&"+"text=" +aaa+ "&b1=&b2=OK"
    require('http').get(str, function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
    var res = str.replace("+", " ");
    message.channel.send(res);
    console.log('[MSG]' + res);
    return
    /*/
  if (message.content.startsWith("j.date")) {
    message.channel.send(`📆 ${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getFullYear()}`)
    console.log(`📆 ${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getFullYear()}`)
    return
  }
  if (message.content.startsWith("j.time")) {
    timehours = thisDate.getHours()
    timeminutes = thisDate.getMinutes()
    timeseconds = thisDate.getSeconds()
    if (timehours >= 12) {
      timehours = timehours - 12
      ampm = "PM"
    } else {
      ampm = "AM"
    }
    if (timehours == 0) { timehours = 12 }
    timehours = timehours.toString().length > 1 ? timehours : '0' + timehours
    timeminutes = timeminutes.toString().length > 1 ? timeminutes : '0' + timeminutes
    timeseconds = timeseconds.toString().length > 1 ? timeseconds : '0' + timeseconds
    message.channel.send('🕒 ' + timehours + ':' + timeminutes + ':' + timeseconds + ' ' + ampm + '\n:warning: `this time isnt really accurate, so sometimes it might show the wrong time`')
  }
  if (message.content.startsWith('j.purge ')) {
    if (message.author.bot) {
      message.channel.send(':x: no.');
    } else {

      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.reply(':bomb: :x: Sorry, but you must have `MANAGE_MESSAGES` to use this command.');
        return
      }
      message.channel.bulkDelete(message.content.slice(8))
    }
  }
  if (message.content.startsWith("j.hi")) {
    message.channel.send("Hello!");
    console.log('[MSG] Hello!');
    return
  }
  if (message.content.startsWith("j.feedback ")) { //
    if (message.channel.nsfw) {
      message.channel.send(":x: Sorry, this command is not allowed in NSFW channels.")
      return;
    }
    let thingtosend = message.content.slice(12).removepings()
    console.log('[FEEDBACK] ' + message.author.tag + ': ' + message.content.slice(11));
    message.channel.send(":heavy_check_mark: Thanks for the feedback. If you want to keep it anonymous, Please do j.privatefeedback <feedback>. Only the bot owner will see your message. We dont do this for appeals unless if you provide your Discord ID.");
    client.channels.cache.get('671064651076993024').send(message.author.tag + ': ' + thingtosend) //sends the msg to my server
    console.log('[MSG] :heavy_check_mark: Thanks for the feedback. If you want to keep it anonymous, Please do j.privatefeedback <feedback>. Only the bot owner will see your message. We dont do this for appeals unless if you provide your Discord ID.');
    return
  }
  if (message.content.startsWith("j.privatefeedback ")) { //message.channel.send(":x: Feedback has shutdown for 5 days. Please come again. `Reason: Example`")
    if (message.channel.nsfw) {
      message.channel.send(":x: Sorry, this command is not allowed in NSFW channels.")
      return;
    }
    message.delete().catch(_O_o => { }); //deletes previous messages. Sneaky, Sneaky, right?
    let thingtosend = message.content.slice(12).removepings()
    console.log('[FEEDBACK] ' + '\**********: ' + thingtosend); //message.channel.send(":x: Private Feedback has shutdown for 5 days. Please come again. `Reason: Example`")
    message.channel.send(":heavy_check_mark: Thanks for the feedback! If this is for appeals, we recommend using j.feedback or provide your Discord ID, Do not worry! We will never EVER sell your personal info! -- I promise!");
    client.channels.cache.get('671064651076993024').send('\**********: ' + thingtosend) //sends the msg to my server
    console.log('[MSG] :heavy_check_mark: Thanks for the feedback! If this is for apeals, we recommend using j.feedback or provide your Discord ID, Do not worry! We will never EVER sell your personal info! -- I promise!');
    return
  }
  if (message.content.startsWith("j.msgsent")) {
    message.channel.send("💬 This command has been disabled");//+ discodmessagesent
    console.log('[MSG] 💬 This command has been disabled');  //+ discodmessagesent
    return
  }
  if (message.content.startsWith('j.gay ')) {
    console.log("jacob dummy.")
    let thingtosend = message.content.slice(6).removepings()
    var gay = Math.floor(Math.random() * 100);
    if (thingtosend.toLowerCase() == "devil") {
      message.channel.send("**:smiling_imp: Devil** is 666% gay")
      console.log("[MSGAL] [GAY] 666")
      return
    }
    if (thingtosend.toLowerCase() == "satan") {
      message.channel.send("**:smiling_imp: Satan** is 666% gay")
      console.log("[MSGAL] [GAY] 666")
      return
    }
    if (gay == 69) {
      message.channel.send(":rainbow_flag: **" + thingtosend + "** is " + gay + "% gay ( ͡° ͜ʖ ͡°)")
      console.log("[MSGAL] [GAY] 69")
      return
    }
    if (gay > 50) {
      message.channel.send(":rainbow_flag: **" + thingtosend + "** is " + gay + "% gay")
      console.log("[MSGAL] [GAY]" + gay)
    } else {
      message.channel.send(":sweat_smile: **" + thingtosend + "** is " + gay + "% gay")
      console.log("[MSGAL] [GAY] " + gay)
    }
    return;
  }
  if (message.content.startsWith('j.rate ')) {
    let thingtosend = message.content.slice(7).removepings()
    if (thingtosend.toLowerCase() == "fortnite") {
      message.channel.send("I rate fortnite 0/10")
      console.log("[MSG] I rate fortnite 0/10")
      return
    }
    if (thingtosend.toLowerCase() == "retrojbot") {
      message.channel.send("I rate myself 10/10")
      console.log("[MSG] I rate myself 10/10")
      return
    } else {
      rate = Math.floor(Math.random() * 10)
      message.channel.send("I rate " + thingtosend + " " + rate + "/10")
      console.log("[MSG] I rate " + message.content.slice(7) + " " + rate + "/10")
    }
  }
  if (message.content.startsWith('j.d20')) {
    message.channel.send(Math.floor((Math.random() * 30) + 1))
    console.log("[MSGAL] d20")
  }
  if (message.content.startsWith("j.ftc ")) {
    var fah = message.content.slice(6)
    var fah = Number(fah)
    fahfinal = (fah - 32) / 1.8
    message.channel.send(':thermometer: ' + fahfinal + '°C');
    console.log('[MSG] :thermometer: ' + fahfinal + '°C');
    return
  }
  if (message.content.startsWith("j.lol")) {
    message.channel.send("Haha! funny!");
    console.log('[MSG] Haha! funny!') //  
  }
  if (message.content.startsWith("j.uselessweb")) {
    var useless = uselessweb[Math.floor(Math.random() * uselessweb.length)]
    message.channel.send(useless);
    console.log('[Uselessweb] [MSG]' + uselessweb)
    return
  }
  if (message.content.startsWith("j.td")) {
    var tf = td[Math.floor(Math.random() * td.length)]
    message.channel.send(tf);
    console.log('[MSG]' + tf)
    return
  }
  if (message.content.startsWith("j.cards")) {
    var card = cards[Math.floor(Math.random() * cards.length)]
    message.channel.send(card);
    console.log('[MSG]' + card)
    return
  }
  if (message.content.startsWith("j.dreidel")) {
    message.channel.send(dreidel[Math.floor(Math.random() * dreidel.length)]);
    console.log('[msgal] [dreidel] spinning teh dreidel lol')
    return
  }
  // **I am pissed**
  if (message.content.startsWith("j.oof")) {
    message.channel.send("**I am pissed.**");
    console.log('[msg] **I am pissed.**')
    return
  }
  if (message.content.startsWith('j.calc ')) {
    message.content = message.content.slice(7)
    var nanieeggyes = nanieegg[Math.floor(Math.random() * nanieegg.length)]
    if (!message.content) return message.channel.send("🖩 " + nanieeggyes)
    message.channel.send('🖩 ' + calc(message.content))
  }
  if (message.content.startsWith("j.retrojbot")) { //message.guild.id == ID_OF_OTHER_SERVER
    message.channel.send("Thats me!");
    console.log('[MSG] Thats me!')
    return
  }
  if (message.content.startsWith("j.about")) {
    if (message.content.substring(7) === " ojproj") {
      message.channel.send("https://cdn.discordapp.com/attachments/612814030515470363/716424491663622235/Untitled.png")
    } else {
      message.channel.send("Credits:\nOjProj#3674\n'HOST'#6969\nziad87#3990\n\n\nCreated by: Jacobw#8117");

      //https://github.com/NotSoSuper/GalliumBot/blob/master/bot.js for the `j.dadmode`
      console.log('[MSG] About command Sent!')
    }
    return
  }
  if (message.content.startsWith("j.invite")) {
    message.channel.send("Invite: https://discordapp.com/api/oauth2/authorize?client_id=612742660658167840&permissions=8&scope=bot Our server: https://discord.gg/EYt579b");
    console.log('[MSG] Invite: https://discordapp.com/api/oauth2/authorize?client_id=612742660658167840&permissions=8&scope=bot Our server: https://discord.gg/EYt579b');
    return
  }
  if (message.content.startsWith('j.ss ')) {
    if (message.channel.nsfw) {//message.channel.send(":x: Server Send has shutdown for 5 days. Please come again. `Reason: Example`")
      message.channel.send(":x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.")
      console.log('[MSG] :x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.');
      return;
    }
    if (ssbans.bans.includes(message.author.id)) {
      message.channel.send(':no_entry: ***You are banned from using Server Send:tm:.***n/ Sorry, But we have to ban you from using the service, If you wanna know why, DM JacobW#8117, If you want to appeal, type j.feedback <Your appeal>, The appeal will be only read by us.');
      console.log('[MSG] :no_entry: ***You are banned from using Server Send:tm:.***n/ Sorry, But we have to ban you from using the service, If you wanna know why, DM JacobW#8117, If you want to appeal, type j.feedback <Your appeal>, The appeal will be only read by us.');
      return;
    }
    let thingtosend = message.content.slice(5).removepings()
    //let len = message.content.split(' ')[0].length ==  12 ? 12 : 5 //jacob u suck
    client.channels.cache.get('617865643307434025').send(ssnum + ". " + message.author.tag + `(id: ${message.author.id})` + ": " + thingtosend)
    message.channel.send('Sent to my server! you can join my server with j.invite')
    console.log('[MSG] [SERVERSEND] <NUM>' + message.author.tag + ": " + message.content.slice(5));
    ssnum++;
  }
  if (message.content.startsWith('j.serversend ')) {
    if (message.channel.nsfw) {//message.channel.send(":x: Server Send has shutdown for 5 days. Please come again. `Reason: Example`")
      message.channel.send(":x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.")
      console.log('[MSG] :x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.');
      return;
    }
    if (ssbans.bans.includes(message.author.id)) {
      message.channel.send(':no_entry: ***You are banned from using Server Send:tm:.***n/ Sorry, But we have to ban you from using the service, If you wanna know why, DM JacobW#8117, If you want to appeal, type j.feedback <Your appeal>, The appeal will be only read by us.');
      console.log('[MSG] :no_entry: ***You are banned from using Server Send:tm:.***n/ Sorry, But we have to ban you from using the service, If you wanna know why, DM JacobW#8117, If you want to appeal, type j.feedback <Your appeal>, The appeal will be only read by us.');
      return;
    }
    let thingtosend = message.content.slice(13).removepings()
    //let len = message.content.split(' ')[0].length ==  12 ? 12 : 5 //jacob u suck
    client.channels.cache.get('617865643307434025').send(ssnum + ". " + message.author.tag + `(id: ${message.author.id})` + ": " + thingtosend)
    message.channel.send('Sent to my server! you can join my server with j.invite')
    console.log('[MSG] [SERVERSEND] <NUM>' + message.author.tag + ": " + message.content.slice(13));
    ssnum++;
  }
  if (message.content.startsWith('j.thot ')) { //checks for j.thot
    let thingtosend = message.content.slice(6).removepings()
    message.channel.send("BEGONE" + thingtosend) //sends the message *HOST NOTE* wow i didnt know thank u
    console.log(message.content.slice(6))
  }
  if (message.content.startsWith('j.srules')) {
    message.channel.send("1. Do not post any NSFW.\n2. Do not post any advertisements.\n3. Do not try to bypass any restrictions.\n4. These rules apply to the TOS and Our server rules.\n5. Common sense.") //sends the message *HOST NOTE* wow i didnt know thank u
  }
  if (message.content.startsWith('j.coinflip')) {
    message.channel.send('The coin landed on ' + "**" + coin[Math.floor(Math.random() * coin.length)] + "**")
  }
  if (message.content.startsWith('j.cp0 ')) {
    var a = coina[Math.floor(Math.random() * coina.length)]
    let thingtosend = message.content.slice(6).removepings()
    if (a.toLowerCase() == thingtosend) {
      message.channel.send('The coin landed on ' + "**" + a + "**. You won!")
      console.log('[MSG] The coin landed on ' + "**" + a + "**. You won!")
    }
    if (a.toLowerCase() !== thingtosend) {
      message.channel.send('The coin landed on ' + "**" + a + "**. You lost...")
      console.log('[MSG] The coin landed on ' + "**" + a + "**. You lost...")
    }
  }
  if (message.content.startsWith('j.yesno')) {
    message.channel.send(yesno[Math.floor(Math.random() * yesno.length)])
  }
  if (message.content.startsWith('j.version')) {
    message.channel.send("v" + version)
    console.log("[MSG]" + "v" + version)
  }
  if (message.content.startsWith('j.1ball')) {
    message.channel.send(':8ball: ' + balln[Math.floor(Math.random() * balln.length)])
    console.log("[MSGAL] rolling the magic 1ball...")
  }
  if (message.content.startsWith('j.69ball')) {
    message.channel.send(':8ball: ' + nball[Math.floor(Math.random() * nball.length)])
    console.log("[MSGAL] rolling the magic 69ball...")
  }
  if (message.content.startsWith('j.honk')) {
    var honkyes = honk[Math.floor(Math.random() * honk.length)]
    message.channel.send(honkyes)
    console.log("[MSG] " + honkyes)
  }
  if (message.content.startsWith('j.HALPMEIHAVETOOMANYDONUTSPLSS')) {
    message.channel.send("**HALPPPPPPP I HAVE TOO MANY DONUTS** :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut:")
    console.log("[MSG] [YAY!] Doughnut command sent!");
    message.react(':doughnut:');
    console.log("[REACTION] [YAY!] Reacted Emoji: Doughnut");
  }
  if (message.content.startsWith('j.sban ')) {
    if (message.author.id != '461984828716482562') { //That is your user id
      message.channel.send(':x: Access Denied. You dont have the permission.');
      return;
    };
    let person = message.author.id
    ssbans.bans.push(person)
    fs.writeFileSync('ssbans.txt', JSON.stringify(ssbans))
    message.channel.send('Success! Swinged the banned hammer on ' + person + " from using Serversend https://media1.tenor.com/images/ae83976e867ebc2722054a632ff045ad/tenor.gif?itemid=11035060");
    return;
  }
  if (message.content.startsWith('j.vaporwave ')) {
    message.channel.send(message.content.slice(12).replace(/()/g, ' '))
    console.log("[ M S G ] [ I N F O ]" + message.content.slice(12).toUpperCase().replace(/()/g, ' '));
  }
  if (message.content.toLowerCase().startsWith('fuck you retrojbot')) {
    console.log("[REACTION] Reacted Emoji: slight_frown");
    message.react('🙁');
  }
  if (message.content.toLowerCase().includes('oj chan')) {
    var ojchan = ['Shut the fuck up', 'No.', 'Shut up.', 'Do not.', 'stop it', 'go fuck yourself', 'say something else then oj chan.', 'fuck off', 'no.', 'do i need to exacute the j.ban command?', 'bitch no.', 'very funny.', 'what. again?', 'stop.', 'shut the fuck up.', 'Stop. Please.', 'Its not funny anymore.', 'Oh my god.', 'Shut the fuck up.', 'NO.', 'AAAAAAAAAAAAAAAAAAA!', 'EAT A DICK.', 'Go away.', 'Get some fucking help.', 'Cease.', 'Please stop.', 'You know, I feel like when you say that, it makes me want to remove your presous member role.', 'j.ban ojchan', 'Stop this.', 'Oh for fuck sakes.', 'Cease. Now.']
    if (message.guild.id == 462290884537352202) {
      message.channel.send(ojchan[Math.floor(Math.random() * ojchan.length)]);
      return
    }
  }
  if (message.content.toLowerCase().includes('ojchan')) {
    var ojchan = ['Shut the fuck up', 'No.', 'Shut up.', 'Do not.', 'stop it', 'go fuck yourself', 'say something else then oj chan.', 'fuck off', 'no.', 'do i need to exacute the j.ban command?', 'bitch no.', 'very funny.', 'what. again?', 'stop.', 'shut the fuck up.', 'Stop. Please.', 'Its not funny anymore.', 'Oh my god.', 'Shut the fuck up.', 'NO.', 'AAAAAAAAAAAAAAAAAAA!', 'EAT A DICK.', 'Go away.', 'Get some fucking help.', 'Cease.', 'Please stop.', 'You know, I feel like when you say that, it makes me want to remove your presous member role.', 'j.ban ojchan', 'Stop this.', 'Oh for fuck sakes.', 'Cease. Now.']
    if (message.guild.id == 462290884537352202) {
      message.channel.send(ojchan[Math.floor(Math.random() * ojchan.length)]);
      return
    }
  }
  if (message.content.toLowerCase().includes('oj-chan')) {
    var ojchan = ['Shut the fuck up', 'No.', 'Shut up.', 'Do not.', 'stop it', 'go fuck yourself', 'say something else then oj chan.', 'fuck off', 'no.', 'do i need to exacute the j.ban command?', 'bitch no.', 'very funny.', 'what. again?', 'stop.', 'shut the fuck up.', 'Stop. Please.', 'Its not funny anymore.', 'Oh my god.', 'Shut the fuck up.', 'NO.', 'AAAAAAAAAAAAAAAAAAA!', 'EAT A DICK.', 'Go away.', 'Get some fucking help.', 'Cease.', 'Please stop.', 'You know, I feel like when you say that, it makes me want to remove your presous member role.', 'j.ban ojchan', 'Stop this.', 'Oh for fuck sakes.', 'Cease. Now.']
    if (message.guild.id == 462290884537352202) {
      message.channel.send(ojchan[Math.floor(Math.random() * ojchan.length)]);
      return
    }
  }
  if (message.content.startsWith('j.uppercase ')) {
    let thingtosend = message.content.slice(12).removepings()
    message.channel.send(thingtosend.toUpperCase())
    console.log("[MSG]" + thingtosend.toUpperCase())
  }
  if (message.content.startsWith('j.uc ')) {
    let thingtosend = message.content.slice(5).removepings()
    message.channel.send(thingtosend.toUpperCase())
    console.log("[MSG]" + thingtosend.toUpperCase())
  }
  if (message.content.startsWith('j.lc')) {
    let thingtosend = message.content.slice(5).removepings()
    message.channel.send(thingtosend.toLowerCase())
    console.log("[MSG]" + thingtosend(5).toLowerCase())
  }
  if (message.content.startsWith('j.lowercase ')) {
    let thingtosend = message.content.slice(12).removepings()
    message.channel.send(thingtosend.toLowerCase())
    console.log("[MSG]" + thingtosend.toLowerCase())
  }
  if (message.content.startsWith('j.servercount ')) {
    message.channel.send("I am in " + client.guilds.size + "servers")
    console.log("[MSG]" + "I am in " + client.guilds.size + "servers");
  }
  if (message.content.startsWith('j.reacttest')) {
    message.react('heavy_check_mark'); //reacts the message
  }
  if (message.content.startsWith('j.rll')) {
    let thingtosend = message.content.slice(6).removepings()
    message.channel.send(letters)
  }
  if (message.content.startsWith('j.rul')) {
    let thingtosend = message.content.slice(6).removepings()
    message.channel.send(letterscaps)
  }
  if (message.content.startsWith("j.scramble ")) {
    message.channel.send(shuffle(message.content.slice(11)));
  }
  if (message.content.startsWith("j.s1")) {
    var useless = uselessweb[Math.floor(Math.random() * uselessweb.length)]
    message.channel.send(shuffle(letterscaps + letters + message.content + client.guilds.size + useless));
  }
  if (message.content.startsWith("j.snuggle ")) {
    let thingtosend = message.content.slice(6).removeping()
    message.channel.send("*" + message.author.tag + " snuggles " + thingtosend + "! Awww... UwU*");
  }
  if (message.content.startsWith("j.reverse ")) {
    //let thingtosend = message.content.slice(10).removeping().reverse(thingtosend)
    message.channel.send(":x: Command Disabled lol");
  }
  if (message.content.startsWith("j.live ")) {
    message.channel.send(":x: Error: Retrojbot is still running.");
  }
  if (message.content.startsWith("j.bogrant ")) {
    //ADD THE FOLLOWING IF TO **ALL** YOUR ADMIN-ONLY COMMANDS  
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send('Error: No Admin!')
      return;
    }
    let idtoadd = message.content.slice(10)
    if (adminlist.admins.includes(idtoadd)) {
      message.channel.send(':x: Error: This admin already exists.');
      return;
    } else {
      adminlist.admins.push(idtoadd)
    }
    fs.writeFileSync("admins.txt", JSON.stringify(adminlist))
    message.channel.send(':heavy_check_mark: Success: Added admin id ' + message.content.slice(10) + ' to `admins.txt`');
  }
  if (message.content.startsWith("j.req")) {
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(":x: " + eeggtwo[Math.floor(Math.random() * eeggtwo.length)])
      return;
    }
    message.channel.send(':heavy_check_mark: Success: Found ID in `admins.txt`')
  }
  if (message.content.startsWith("j.ping")) {
    message.channel.send(":ping_pong: Pong!  " + Math.floor(client.ws.ping) + 'ms');
    console.log("[MSG] :ping_pong: Pong!  " + Math.floor(client.ws.ping) + 'ms');
    return;
  }
  if (message.content.startsWith("j.test")) {
    message.channel.send("Testing... it works");
    console.log("[MSG] Testing... it works");
    return
  }
    if (message.content.startsWith("j.phone")) {
    message.channel.send(":telephone: Calling...");
    //setTimeout(function(){          message.channel.send(":warning: **403 ERROR. Your request was denied.** The service is privated. Please ask the creator (jacobw#8117) if you need to get access to this service");     }, 30000);
   // setTimeout(function(){          message.channel.send(":x: ***RetroJPhone servers are down at the moment.***\n ```js\n This service has been discontinued. \n\n\n\n\nThank you for using this service.```");     }, 10000);
    console.log("[MSG] Calling...");
    message.channel.send("You are connected to the server: `Unknown`");
    message.channel.send("Ping: "+Math.floor(client.ws.ping) + 'ms');
    setTimeout(function(){            message.channel.send(":telephone_receiver: **RetroJBOT#0000**: We are sorry, but the phone system has not been implemented yet.");     }, 1000);
    setTimeout(function(){          message.channel.send(":telephone_receiver: **RetroJBOT#0000**: For further assistence, please dm Jacobw#8117.");     }, 10000);
    setTimeout(function(){          message.channel.send(":telephone_receiver: **RetroJBOT#0000**: Goodbye.");     }, 20000);
    setTimeout(function(){          message.channel.send(":telephone: They hung up");     }, 30000);
    return
  }
message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => { 
  message.channel.createWebhook('Shrek', { avatar: 'https://cdn.discordapp.com/avatars/757068148511080529/c986c8cde4521200fe42540acec0fba0.png?size=1024' }).then(webhook => {
  console.log('[MSG] <a:Loading_Color:759914061696860202>');
    const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
    webhooksend.send('I AM SHREK')
    .then(() => webhook.delete());
msg.delete();
});
});
}
if (message.content === "j.winxp") {
  if (message.channel instanceof Discord.DMChannel) { //do not execute
    message.channel.send(':no_entry_sign: You cannot use this command in dms.');
    return;
  }
message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
message.channel.createWebhook('Windows XP', { avatar: 'https://cdn.discordapp.com/avatars/757068117846523954/4881f167d7db8fc35b20f8cd3b014613.png?size=1024' }).then(webhook => {
  console.log('[MSG] <a:Loading_Color:759914061696860202>');
                const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
                webhooksend.send('Windows XD')
                .then(() => webhook.delete());
msg.delete();
});
});
}
if (message.content === "j.42") {
  if (message.channel instanceof Discord.DMChannel) { //do not execute
    message.channel.send(':no_entry_sign: You cannot use this command in dms.');
    return;
  }
message.channel.send('<a:Loading_Color:759914061696860202>').then(msg => {
message.channel.createWebhook('System42', { avatar: 'https://cdn.discordapp.com/avatars/480276421252612098/98426f23b3bfab6b0cd8c00e2da3750b.png?size=1024' }).then(webhook => {
  console.log('[MSG] <a:Loading_Color:759914061696860202>');
                const webhooksend = new Discord.WebhookClient(webhook.id, webhook.token);
                webhooksend.send('𝓘 𝓽𝓱𝓲𝓷𝓴 𝓷𝓸𝓽.')
                .then(() => webhook.delete());
msg.delete();
});
});
}
  if (message.content.startsWith("j.inspirobot")) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
    require('https').get('https://inspirobot.me/api?generate=true', function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
    msg.delete();
    return;
    });
  } 
  if (message.content.startsWith("j.tw ")) {
    message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
    require('http').get('http://api.img4me.com/?font=sans&fcolor=000000&size=35&type=png&text='+message.content.slice(5), function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
    msg.delete();
    return;
    });
  }
/*/
  if (message.content.startsWith("j.explode")) {
const options = {
  hostname: 'svr.ziad87.net',
  path: '/api',
  headers: {
      Authorization: '98659b5fddebe5376390b204eddf1c9cbf82eadb207efcc22f0dbc47395f56de'
  }
}
    message.channel.send('<a:Loading_Color:759914061696860202> :bomb: *Lighting up the bomb...*').then(msg => {
    require('https').get('https://svr.ziad87.net/api/viral?avatar1='+message.content.slice(5), function (response) { response.on('data', function (options) { message.channel.send(String(response)) }) })
    console.log('[RESPONSE VARIABLE] '+response)
    console.log('[OPTIONS VARIABLE] '+options)
    console.log('[STRING] '+String(response))
    msg.delete();
    return;
    });
  }
  /*/
  if (message.content.startsWith("j.cook ")) {
    let thingtosend = message.content.slice(7).rpremovepings()
const percentages = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '99']; //change const to var for now
if (thingtosend.toLowerCase() == "turkey") {
  message.channel.send('https://web.archive.org/web/20091019002253if_/http://sg.geocities.com/tanwunhui/roasted_turkey.gif')
}
message.channel.send('<a:Loading_Color:759914061696860202> **COOKING** '+thingtosend+' - 0%').then(cook => {
  let i = 0;
  let interval = setInterval(function(){
       if(i >= percentages.length){
         cook.edit('**DONE COOKING** Successfully cooked '+thingtosend+'!');
         clearInterval(interval);
         return;
       }
       cook.edit('<a:Loading_Color:759914061696860202> **COOKING** '+thingtosend+' - ' + percentages[i] + '%');
       i++;
  },1000);
});
  }
  if (message.content.startsWith("j.itc ")) {
    imp = message.content.slice(6)
    if (imp.includes('\'')) {
      bothU = imp.split('\'')
      feet = bothU[0]
      feet = Number(feet)
      inch = bothU[1]
      inch = inch.replace(/\"/g, '')
      inch = Number(inch)
    } else {
      feet = 0
      inch = imp
      inch = imp.replace(/\"/g, '')
      inch = Number(inch)
    }
    ftinchfinal = (feet * 30.48) + (inch * 2.54)
    message.channel.send(':straight_ruler: ' + ftinchfinal + 'cm')
    return
  }
  if (message.content.startsWith("j.ctf ")) {
    var cel = message.content.slice(6)
    var cel = Number(cel)
    celfinal = 32 + 1.8 * cel
    message.channel.send(':thermometer: ' + celfinal + '°F');
    console.log('[MSG] :thermometer: ' + celfinal + '°F');
    return
  }
  if (message.content.startsWith('j.ban')) {
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return;
    }
    if (message.author.bot) {
      message.channel.send(':x: no.');
    } else {
      if (!message.member.hasPermission("BAN_MEMBER")) {
        message.reply(':hammer: :noentry: Your permissions forbid you to ban someone.');
        return
      }
      //    if (permArray.indexOf(true) == -1) {
      //      message.reply('Your permissions forbid you to ban someone.');
      //      return
      //    } HAHAHA, THIS ONE I SHIT MY SELF ON. LOL

      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.ban('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(':hammer: ✅ `Successfully Banned Hammered`'+ message.content.slice(6) + 'https://media1.tenor.com/images/ae83976e867ebc2722054a632ff045ad/tenor.gif?itemid=11035060');
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply(':x: I was unable to ban the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply(':x: That user isn\'t in this guild!');
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply(':warning: You didn\'t mention the user to ban!');
      }
      return
    }
  }
  if (message.content.startsWith('j.kick')) {
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return;
    }
    if (message.author.bot) {
      message.channel.send(':x: no.');
    } else {
      if (!message.member.hasPermission("KICK_MEMBER")) {
        message.reply('Your permissions forbid you to kick someone.');
        return
      }
      //    if (permArray.indexOf(true) == -1) {
      //      message.reply('Your permissions forbid you to ban someone.');
      //      return
      //    } HAHAHA, THIS ONE I SHIT MY SELF ON. LOL
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member.kick('Optional reason that will display in the audit logs').then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked `+ message.content.slice(6));
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('That user isn\'t in this guild!');
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply('You didn\'t mention the user to kick!');
      }
      return
    }
  }
 /*/
  if (message.content.startsWith("j.admincommands")) {
    message.channel.send("Admin Commands: ``\nadmincommands -- shows this list\n die -- shutdown the bot\n eval -- Test code in the bot, not sand boxed.\n test -- test the bot message\n removesac -- removes the online counter\n clearsac -- clears the online counter\n login <password> -- Enter a password through client.login``\nsban <user id> prefix: `j.` Version A.D.M.I.N. Note: These commands can actully be found in the help commands too. Some of these command wont work beacause you dont have permission, or its left unfinished.");
    console.log('[MSGAL] [SUCCESS] Admins Command Sent!');
    return
  }
/*/
  if (message.content.startsWith("j.hi")) {
    message.channel.send("Hello!");
    console.log('[MSG] Hello!');
    return
  }
  if (message.content.startsWith("j.slap ")) {
    let thingtosend = message.content.slice(7).rpremovepings()
    message.channel.send("*" + message.author.tag + " slapped " + thingtosend + " with a huge trout!*");
  }
  if (message.content.startsWith("j.hug ")) {
    let thingtosend = message.content.slice(6).rpremovepings()
    message.channel.send("*" + message.author.tag + " hugged " + thingtosend + " Awwww... UwU*");
  }
  if (message.content.startsWith("j.distract ")) {
    let thingtosend = message.content.slice(11).rpremovepings()
    message.channel.send("*" + thingtosend + " got distracted by " + message.author.tag + "!*");
    message.channel.send("https://cdn.discordapp.com/attachments/468916221975199745/744326878009229382/image0.gif");
  }
  if (message.content.startsWith("j.microwave ")) {
    let thingtosend = message.content.slice(12).rpremovepings()
    message.channel.send("*" + thingtosend + " was thrown in the microwave!*");
  }
  if (message.content.startsWith("j.fuck ")) {
message.channel.send(":x: Command disabled.")
/*/
      let thingtosend = message.content.slice(6).rpremovepings()
    message.channel.send("" + message.member.tag + "... what are you doing to" + message.content.slice(6) + "?! *gasp* Oh my... " + fuckgif[Math.floor(Math.random() * fuckgif.length)]);
/*/
  }
  if (message.content.startsWith("j.kill ")) {
    let thingtosend = message.content.slice(6).rpremovepings()
    message.channel.send("*" + message.author.tag + " killed" + thingtosend + "!*");
  }
  if (message.content.startsWith("j.snuggle ")) {
    let thingtosend = message.content.slice(10).rpremovepings()
    message.channel.send("*" + message.author.tag + " snuggles" + thingtosend + "! How fluffy is their fur? OwO*");
  }
  if (message.content.startsWith("j.happy")) {
    message.channel.send("*" + message.author.tag + " is happy!*");
  }
  if (message.content.startsWith("j.sad")) {
    message.channel.send("*" + message.author.tag + " is sad... cheer up my friend.*");
  }
  if (message.content.startsWith("j.revive ")) {
    let thingtosend = message.content.slice(9).rpremovepings()
    message.channel.send("*" + message.author.tag + " revived " + thingtosend+"!*");
  }
  if (message.content.startsWith("j.angry")) {
    message.channel.send("*" + message.author.tag + " is so angry, that he smashed there keyboard and throwed it out of the window!*");
  }
  if (message.content.startsWith("j.mad")) {
    message.channel.send("*" + message.author.tag + " is so angry, that he smashed there keyboard and throwed it out of the window!*");
  }//
  if (message.content.startsWith("j.nuzzle ")) {
    let thingtosend = message.content.slice(8).rpremovepings()
    message.channel.send("*" + message.author.tag + " nuzzles " + thingtosend + "!*");
  }
    if (message.content.startsWith("j.error ")) {
      message.channel.send('<a:Loading_Color:759914061696860202> *Loading...*').then(msg => {
      let thingtosend = message.content.slice(8).rpremovepings()
    message.channel.send("http://atom.smasher.org/error/xp.png.php?icon=Error3&title=Error&url=&text="+encodeURIComponent(thingtosend)+"&b1=&b2=OK")
    msg.delete();
    return;
    });
  }
  if (message.content.startsWith("j.undertale ")) {
    let thingtosend = message.content.slice(12).rpremovepings()
  //message.channel.send("If image doesn't appear, but the link does, Open the link to see the image, or try again.")
  message.channel.send("https://www.demirramon.com/utgen.png?message="+encodeURIComponent(thingtosend))
  //require('https').get('https://inspirobot.me/api?generate=true'+encodeURIComponent(thingtosend), function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
  }
  if (message.content.startsWith("j.steamemote ")) {
 //   message.channel.send('<a:Loading_Color:759914061696860202> *Please wait...*').then(msg => {
    let thingtosend = message.content.slice(13).removepings()
    message.channel.send("https://steamcommunity-a.akamaihd.net/economy/emoticon/"+encodeURIComponent(thingtosend))
    if (thingtosend === "") {
      message.channel.send(":octagonal_sign: Specify a name of a steam emote, Please.")
      }
      if (thingtosend === "_ _") {
        message.channel.send(":x: Um.. no?")
      }
      if (thingtosend === " ") {
        message.channel.send(":octagonal_sign: Stop it.")
      }
      if (thingtosend === "*** ***") {
        message.channel.send(":no_entry: no.")
      }
      if (thingtosend === ('porn') || thingtosend === ('penis') || thingtosend === ('ass')){
        message.channel.send(":no_entry: Fuck off. You sick mind")
      }
  if (message.content.startsWith("j.baka")) {
    let thingtosend = message.content.slice(6).rpremovepings()
    message.channel.send(':x: this command is disabled');
  //  message.channel.send("*Wtf someone is being an idiot*");
    //require('https').get('https://api.giphy.com/v1/gifs/random?q=ryan+gosling&api_key=1Mhg4tCyxhdXOtzaPFljuwdY2aAV2KV9&limit=1', function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
  }//http://api.giphy.com/v1/gifs/search?q={0}&api_key=dc6zaTOxFJmzC
  if (message.content.startsWith("j.penisscale ")) {
message.channel.send(":x: Command disabled.")
//    message.channel.send(message.content.slice(13) + " penis is this long: " + penisscale[Math.floor(Math.random() * penisscale.length)]);
  }
  if (message.content.startsWith("j.guildid")) {
    if (message.channel instanceof Discord.DMChannel) { //do not execute
      message.channel.send(':no_entry_sign: You cannot use this command in dms.');
      return
    }
    message.channel.send(message.guild.id);
    console.log('[MSG]' + message.guild.id);
    return
  }
  /*/
  if (message.content.startsWith("j.error ")) {
    if (message.content.substring(8) === " ") {
        message.channel.send(":warning: Due to the api being a dumpster with fire, you are gonna have to use the + symbol as a space. Sorry.")
      }
    var aaa = message.content.slice(8)
    var str = "http://atom.smasher.org/error/xp.png.php?icon=Error3&title=Error&url=&"+"text=" +aaa+ "&b1=&b2=OK"
    require('http').get(str, function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
    var res = str.replace("+", " ");
    message.channel.send(res);
    console.log('[MSG]' + res);
    return
    /*/
  if (message.content.startsWith("j.date")) {
    message.channel.send(`📆 ${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getFullYear()}`)
    console.log(`📆 ${thisDate.getMonth() + 1}/${thisDate.getDate()}/${thisDate.getFullYear()}`)
    return
  }
  if (message.content.startsWith("j.time")) {
    timehours = thisDate.getHours()
    timeminutes = thisDate.getMinutes()
    timeseconds = thisDate.getSeconds()
    if (timehours >= 12) {
      timehours = timehours - 12
      ampm = "PM"
    } else {
      ampm = "AM"
    }
    if (timehours == 0) { timehours = 12 }
    timehours = timehours.toString().length > 1 ? timehours : '0' + timehours
    timeminutes = timeminutes.toString().length > 1 ? timeminutes : '0' + timeminutes
    timeseconds = timeseconds.toString().length > 1 ? timeseconds : '0' + timeseconds
    message.channel.send('🕒 ' + timehours + ':' + timeminutes + ':' + timeseconds + ' ' + ampm + '\n:warning: `this time isnt really accurate, so sometimes it might show the wrong time`')
  }
  if (message.content.startsWith('j.purge ')) {
    if (message.author.bot) {
      message.channel.send(':x: no.');
    } else {

      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.reply(':bomb: :x: Sorry, but you must have `MANAGE_MESSAGES` to use this command.');
        return
      }
      message.channel.bulkDelete(message.content.slice(8))
    }
  }
  if (message.content.startsWith("j.hi")) {
    message.channel.send("Hello!");
    console.log('[MSG] Hello!');
    return
  }
  if (message.content.startsWith("j.feedback ")) { //
    if (message.channel.nsfw) {
message.channel.send(":x: Sorry, this command is not allowed in NSFW channels.")
      return;
    }
    let thingtosend = message.content.slice(12).removepings()
    console.log('[FEEDBACK] ' + message.author.tag + ': ' + message.content.slice(11));
    message.channel.send(":heavy_check_mark: Thanks for the feedback. If you want to keep it anonymous, Please do j.privatefeedback <feedback>. Only the bot owner will see your message. We dont do this for appeals unless if you provide your Discord ID.");
    client.channels.cache.get('671064651076993024').send(message.author.tag + ': ' + thingtosend) //sends the msg to my server
    console.log('[MSG] :heavy_check_mark: Thanks for the feedback. If you want to keep it anonymous, Please do j.privatefeedback <feedback>. Only the bot owner will see your message. We dont do this for appeals unless if you provide your Discord ID.');
    return
  }
  if (message.content.startsWith("j.privatefeedback ")) { //message.channel.send(":x: Feedback has shutdown for 5 days. Please come again. `Reason: Example`")
    if (message.channel.nsfw) {
message.channel.send(":x: Sorry, this command is not allowed in NSFW channels.")
      return;
    }
    message.delete().catch(_O_o => { }); //deletes previous messages. Sneaky, Sneaky, right?
    let thingtosend = message.content.slice(12).removepings()
    console.log('[FEEDBACK] ' + '\**********: ' + thingtosend); //message.channel.send(":x: Private Feedback has shutdown for 5 days. Please come again. `Reason: Example`")
    message.channel.send(":heavy_check_mark: Thanks for the feedback! If this is for appeals, we recommend using j.feedback or provide your Discord ID, Do not worry! We will never EVER sell your personal info! -- I promise!");
    client.channels.cache.get('671064651076993024').send('\**********: ' + thingtosend) //sends the msg to my server
    console.log('[MSG] :heavy_check_mark: Thanks for the feedback! If this is for apeals, we recommend using j.feedback or provide your Discord ID, Do not worry! We will never EVER sell your personal info! -- I promise!');
    return
  }
  if (message.content.startsWith("j.msgsent")) {
    message.channel.send("💬 This command has been disabled");//+ discodmessagesent
    console.log('[MSG] 💬 This command has been disabled');  //+ discodmessagesent
    return
  }
  if (message.content.startsWith('j.gay ')) {
    let thingtosend = message.content.slice(6).rpremovepings()
    gay = Math.floor(Math.random() * 100)
    if (thingtosend.toLowerCase() == "devil") {
      message.channel.send("**:smiling_imp: Devil** is 666% gay")
      console.log("[MSGAL] [GAY] 666")
      return
    }
    if (thingtosend.toLowerCase() == "satan") {
      message.channel.send("**:smiling_imp: Satan** is 666% gay")
      console.log("[MSGAL] [GAY] 666")
      return
    }
    if (gay == 69) {
      message.channel.send(":rainbow_flag: **" + thingtosend + "** is " + gay + "% gay ( ͡° ͜ʖ ͡°)")
      console.log("[MSGAL] [GAY] 69")
      return
    }
    if ((gay + '').match(/\./) || gay > 50) {
      message.channel.send(":rainbow_flag: **" + thingtosend + "** is " + gay + "% gay")
      console.log("[MSGAL] [GAY]" + gay)
    } else {
      message.channel.send(":sweat_smile: **" + thingtosend + "** is " + gay + "% gay")
      console.log("[MSGAL] [GAY] " + gay)
    }
  }
  if (message.content.startsWith('j.rate ')) {
    let thingtosend = message.content.slice(7).removepings()
    if (thingtosend.toLowerCase() == "fortnite") {
      message.channel.send("I rate fortnite 0/10")
      console.log("[MSG] I rate fortnite 0/10")
      return
    }
      if (thingtosend.toLowerCase() == "retrojbot") {
      message.channel.send("I rate myself 10/10")
      console.log("[MSG] I rate myself 10/10")
      return
    } else {
    rate = Math.floor(Math.random() * 10)
    message.channel.send("I rate " + thingtosend + " " + rate + "/10")
    console.log("[MSG] I rate " + message.content.slice(7) + " " + rate + "/10")
    }
  }
  if (message.content.startsWith('j.d20')) {
    message.channel.send(Math.floor((Math.random() * 30) + 1))
    console.log("[MSGAL] d20")
  }
  if (message.content.startsWith("j.ftc ")) {
    var fah = message.content.slice(6)
    var fah = Number(fah)
    fahfinal = (fah - 32) / 1.8
    message.channel.send(':thermometer: ' + fahfinal + '°C');
    console.log('[MSG] :thermometer: ' + fahfinal + '°C');
    return
  }
  if (message.content.startsWith("j.lol")) {
    message.channel.send("Haha! funny!");
    console.log('[MSG] Haha! funny!') //  
  }
  if (message.content.startsWith("j.uselessweb")) {
    var useless = uselessweb[Math.floor(Math.random() * uselessweb.length)]
    message.channel.send(useless);
    console.log('[Uselessweb] [MSG]' + uselessweb)
    return
  }
  if (message.content.startsWith("j.td")) {
    var tf = td[Math.floor(Math.random() * td.length)]
    message.channel.send(tf);
    console.log('[MSG]' + tf)
    return
  }
  if (message.content.startsWith("j.cards")) {
    var card = cards[Math.floor(Math.random() * cards.length)]
    message.channel.send(card);
    console.log('[MSG]' + card)
    return
  }
  if (message.content.startsWith("j.dreidel")) {
    message.channel.send(dreidel[Math.floor(Math.random() * dreidel.length)]);
    console.log('[msgal] [dreidel] spinning teh dreidel lol')
    return
  }
  // **I am pissed**
  if (message.content.startsWith("j.oof")) {
    message.channel.send("**I am pissed.**");
    console.log('[msg] **I am pissed.**')
    return
  }
  if (message.content.startsWith('j.calc ')) {
    message.content = message.content.slice(7)
    var nanieeggyes = nanieegg[Math.floor(Math.random() * nanieegg.length)]
    if (!message.content) return message.channel.send("🖩 " + nanieeggyes)
    message.channel.send('🖩 ' + calc(message.content))
  }
  if (message.content.startsWith("j.retrojbot")) { //message.guild.id == ID_OF_OTHER_SERVER
    message.channel.send("Thats me!");
    console.log('[MSG] Thats me!')
    return
  }
  if (message.content.startsWith("j.about")) {
    if (message.content.substring(7) === " ojproj") {
      message.channel.send("https://cdn.discordapp.com/attachments/612814030515470363/716424491663622235/Untitled.png")
    } else {
      message.channel.send("Credits:\nOjProj#3674\n'HOST'#6969\nziad87#3990\n\n\nCreated by: Jacobw#8117");

      //https://github.com/NotSoSuper/GalliumBot/blob/master/bot.js for the `j.dadmode`
      console.log('[MSG] About command Sent!')
    }
    return
  }
  if (message.content.startsWith("j.invite")) {
    message.channel.send("Invite: https://discordapp.com/api/oauth2/authorize?client_id=612742660658167840&permissions=8&scope=bot Our server: https://discord.gg/EYt579b");
    console.log('[MSG] Invite: https://discordapp.com/api/oauth2/authorize?client_id=612742660658167840&permissions=8&scope=bot Our server: https://discord.gg/EYt579b');
    return
  }
  if (message.content.startsWith('j.ss ')) {
    if (message.channel.nsfw) {//message.channel.send(":x: Server Send has shutdown for 5 days. Please come again. `Reason: Example`")
message.channel.send(":x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.")
    console.log('[MSG] :x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.');
      return;
    }
    if (ssbans.bans.includes(message.author.id)) {
      message.channel.send(':no_entry: ***You are banned from using Server Send:tm:.***n/ Sorry, But we have to ban you from using the service, If you wanna know why, DM Jacob Workman#8117, If you want to appeal, type j.feedback <Your appeal>, The appeal will be only read by us.');
console.log('[MSG] :no_entry: ***You are banned from using Server Send:tm:.***n/ Sorry, But we have to ban you from using the service, If you wanna know why, DM Jacob Workman#8117, If you want to appeal, type j.feedback <Your appeal>, The appeal will be only read by us.');
      return;
    }
    let thingtosend = message.content.slice(5).removepings()
    //let len = message.content.split(' ')[0].length ==  12 ? 12 : 5 //jacob u suck
    client.channels.cache.get('617865643307434025').send(ssnum + ". " + message.author.tag + `(id: ${message.author.id})` + ": "+thingtosend)  
    message.channel.send('Sent to my server! you can join my server with j.invite')
    console.log('[MSG] [SERVERSEND] <NUM>' + message.author.tag + ": " + message.content.slice(5));
    ssnum++;
  }
  if (message.content.startsWith('j.serversend ')) {
    if (message.channel.nsfw) {//message.channel.send(":x: Server Send has shutdown for 5 days. Please come again. `Reason: Example`")
message.channel.send(":x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.")
    console.log('[MSG] :x: Sorry, this command is not allowed in NSFW channels. **Bypassing this resriction will be a ban without any warning.** See `j.srules` for more info.');
      return;
    }
    if (ssbans.bans.includes(message.author.id)) {
      message.channel.send(':no_entry: ***You are banned from using Server Send:tm:.***n/ Sorry, But we have to ban you from using the service, If you wanna know why, DM Jacob Workman#8117, If you want to appeal, type j.feedback <Your appeal>, The appeal will be only read by us.');
console.log('[MSG] :no_entry: ***You are banned from using Server Send:tm:.***n/ Sorry, But we have to ban you from using the service, If you wanna know why, DM Jacob Workman#8117, If you want to appeal, type j.feedback <Your appeal>, The appeal will be only read by us.');
      return;
    }
    let thingtosend = message.content.slice(13).removepings()
    //let len = message.content.split(' ')[0].length ==  12 ? 12 : 5 //jacob u suck
    client.channels.cache.get('617865643307434025').send(ssnum + ". " + message.author.tag + `(id: ${message.author.id})` + ": "+thingtosend)  
    message.channel.send('Sent to my server! you can join my server with j.invite')
    console.log('[MSG] [SERVERSEND] <NUM>' + message.author.tag + ": " + message.content.slice(13));
    ssnum++;
  }
  if (message.content.startsWith('j.thot ')) { //checks for j.thot
    let thingtosend = message.content.slice(6).removepings()
    message.channel.send("BEGONE" + thingtosend) //sends the message *HOST NOTE* wow i didnt know thank u
    console.log(message.content.slice(6))
  }
  if (message.content.startsWith('j.srules')) {
    message.channel.send("1. Do not post any NSFW.\n2. Do not post any advertisements.\n3. Do not try to bypass any restrictions.\n4. These rules apply to the TOS and Our server rules.\n5. Common sense.") //sends the message *HOST NOTE* wow i didnt know thank u
  }
  if (message.content.startsWith('j.coinflip')) {
    message.channel.send('The coin landed on ' + "**" + coin[Math.floor(Math.random() * coin.length)] + "**")
  }
  if (message.content.startsWith('j.cp0 ')) {
    var a = coina[Math.floor(Math.random() * coina.length)]
    let thingtosend = message.content.slice(6).removepings()
    if (a.toLowerCase() == thingtosend) {
      message.channel.send('The coin landed on ' + "**" + a + "**. You won!")
      console.log('[MSG] The coin landed on ' + "**" + a + "**. You won!")
    }
    if (a.toLowerCase() !== thingtosend) {
      message.channel.send('The coin landed on ' + "**" + a + "**. You lost...")
      console.log('[MSG] The coin landed on ' + "**" + a + "**. You lost...")
    }
  }
  if (message.content.startsWith('j.yesno')) {
    message.channel.send(yesno[Math.floor(Math.random() * yesno.length)])
  }
  if (message.content.startsWith('j.version')) {
    message.channel.send("v"+ version)
    console.log("[MSG]"+"v"+ version)
  }
  if (message.content.startsWith('j.1ball')) {
    message.channel.send(':8ball: ' + balln[Math.floor(Math.random() * balln.length)])
    console.log("[MSGAL] rolling the magic 1ball...")
  }
  if (message.content.startsWith('j.69ball')) {
    message.channel.send(':8ball: ' + nball[Math.floor(Math.random() * nball.length)])
    console.log("[MSGAL] rolling the magic 69ball...")
  }
  if (message.content.startsWith('j.honk')) {
    var honkyes = honk[Math.floor(Math.random() * honk.length)]
    message.channel.send(honkyes)
    console.log("[MSG] " + honkyes)
  }
  if (message.content.startsWith('j.HALPMEIHAVETOOMANYDONUTSPLSS')) {
    message.channel.send("**HALPPPPPPP I HAVE TOO MANY DONUTS** :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut: :doughnut:")
    console.log("[MSG] [YAY!] Doughnut command sent!");
    message.react(':doughnut:');
    console.log("[REACTION] [YAY!] Reacted Emoji: Doughnut");
  }
  if (message.content.startsWith('j.sban ')) {
    if (message.author.id != '461984828716482562') { //That is your user id
      message.channel.send(':x: Access Denied. You dont have the permission.');
      return;
    };
    let person = message.author.id
    ssbans.bans.push(person)
    fs.writeFileSync('ssbans.txt', JSON.stringify(ssbans))
    message.channel.send('Success! Swinged the banned hammer on ' + person + " from using Serversend https://media1.tenor.com/images/ae83976e867ebc2722054a632ff045ad/tenor.gif?itemid=11035060");
    return;
  }
  if (message.content.startsWith('j.vaporwave ')) {
    message.channel.send(message.content.slice(12).replace(/()/g, ' '))
    console.log("[ M S G ] [ I N F O ]" + message.content.slice(12).toUpperCase().replace(/()/g, ' '));
  }
  if (message.content.toLowerCase().startsWith('fuck you retrojbot')) {
      console.log("[REACTION] Reacted Emoji: slight_frown");
      message.react('🙁');
}
  if (message.content.toLowerCase().includes('oj chan')) {
var ojchan = ['Shut the fuck up', 'No.','Shut up.', 'Do not.', 'stop it', 'go fuck yourself', 'say something else then oj chan.', 'fuck off', 'no.', 'do i need to exacute the j.ban command?', 'bitch no.','very funny.','what. again?', 'stop.', 'shut the fuck up.', 'Stop. Please.', 'Its not funny anymore.','Oh my god.','Shut the fuck up.', 'NO.', 'AAAAAAAAAAAAAAAAAAA!','EAT A DICK.','Go away.','Get some fucking help.','Cease.','Please stop.','You know, I feel like when you say that, it makes me want to remove your presous member role.','j.ban ojchan','Stop this.','Oh for fuck sakes.','Cease. Now.']
    if (message.guild.id == 462290884537352202) {
message.channel.send(ojchan[Math.floor(Math.random() * ojchan.length)]);
      return
    }
}
  if (message.content.toLowerCase().includes('ojchan')) {
var ojchan = ['Shut the fuck up', 'No.','Shut up.', 'Do not.', 'stop it', 'go fuck yourself', 'say something else then oj chan.', 'fuck off', 'no.', 'do i need to exacute the j.ban command?', 'bitch no.','very funny.','what. again?', 'stop.', 'shut the fuck up.', 'Stop. Please.', 'Its not funny anymore.','Oh my god.','Shut the fuck up.', 'NO.', 'AAAAAAAAAAAAAAAAAAA!','EAT A DICK.','Go away.','Get some fucking help.','Cease.','Please stop.','You know, I feel like when you say that, it makes me want to remove your presous member role.','j.ban ojchan','Stop this.','Oh for fuck sakes.','Cease. Now.']
    if (message.guild.id == 462290884537352202) {
message.channel.send(ojchan[Math.floor(Math.random() * ojchan.length)]);
      return
    }
}
  if (message.content.toLowerCase().includes('oj-chan')) {
var ojchan = ['Shut the fuck up', 'No.','Shut up.', 'Do not.', 'stop it', 'go fuck yourself', 'say something else then oj chan.', 'fuck off', 'no.', 'do i need to exacute the j.ban command?', 'bitch no.','very funny.','what. again?', 'stop.', 'shut the fuck up.', 'Stop. Please.', 'Its not funny anymore.','Oh my god.','Shut the fuck up.', 'NO.', 'AAAAAAAAAAAAAAAAAAA!','EAT A DICK.','Go away.','Get some fucking help.','Cease.','Please stop.','You know, I feel like when you say that, it makes me want to remove your presous member role.','j.ban ojchan','Stop this.','Oh for fuck sakes.','Cease. Now.']
    if (message.guild.id == 462290884537352202) {
message.channel.send(ojchan[Math.floor(Math.random() * ojchan.length)]);
      return
    }
}
  if (message.content.startsWith('j.uppercase ')) {
    let thingtosend = message.content.slice(12).removepings()
    message.channel.send(thingtosend.toUpperCase())
    console.log("[MSG]" + thingtosend.toUpperCase())
  }
  if (message.content.startsWith('j.uc ')) {
    let thingtosend = message.content.slice(5).removepings()
    message.channel.send(thingtosend.toUpperCase())
    console.log("[MSG]" + thingtosend.toUpperCase())
  }
  if (message.content.startsWith('j.lc')) {
    let thingtosend = message.content.slice(5).removepings()
    message.channel.send(thingtosend.toLowerCase())
    console.log("[MSG]" + thingtosend(5).toLowerCase())
  }
  if (message.content.startsWith('j.lowercase ')) {
    let thingtosend = message.content.slice(12).removepings()
    message.channel.send(thingtosend.toLowerCase())
    console.log("[MSG]" + thingtosend.toLowerCase())
  }
  if (message.content.startsWith('j.servercount ')) {
    message.channel.send("I am in " + client.guilds.size + "servers")
    console.log("[MSG]" + "I am in " + client.guilds.size + "servers");
  }
  if (message.content.startsWith('j.reacttest')) {
    message.react('heavy_check_mark'); //reacts the message
  }
  if (message.content.startsWith('j.rll')) {
    let thingtosend = message.content.slice(6).removepings()
    message.channel.send(letters)
  }
  if (message.content.startsWith('j.rul')) {
    let thingtosend = message.content.slice(6).removepings()
    message.channel.send(letterscaps)
  }
  if (message.content.startsWith("j.scramble ")) {
    message.channel.send(shuffle(message.content.slice(11)));
  }
  if (message.content.startsWith("j.s1")) {
    var useless = uselessweb[Math.floor(Math.random() * uselessweb.length)]
    message.channel.send(shuffle(letterscaps + letters + message.content + client.guilds.size + useless));
  }
  if (message.content.startsWith("j.snuggle ")) {
    let thingtosend = message.content.slice(6).removeping()
    message.channel.send("*" + message.author.tag + " snuggles " + thingtosend + "! Awww... UwU*");
  }
  if (message.content.startsWith("j.reverse ")) {
    //let thingtosend = message.content.slice(10).removeping().reverse(thingtosend)
    message.channel.send(":x: Command Disabled lol");
  }
  if (message.content.startsWith("j.live ")) {
    message.channel.send(":x: Error: Retrojbot is still running.");
  }
  if (message.content.startsWith("j.bogrant ")) {
    //ADD THE FOLLOWING IF TO **ALL** YOUR ADMIN-ONLY COMMANDS  
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send('Error: No Admin!')
      return;
    }
    let idtoadd = message.content.slice(10)
    if (adminlist.admins.includes(idtoadd)) {
      message.channel.send(':x: Error: This admin already exists.');
      return;
    } else {
      adminlist.admins.push(idtoadd)
    }
    fs.writeFileSync("admins.txt", JSON.stringify(adminlist))
    message.channel.send(':heavy_check_mark: Success: Added admin id ' + message.content.slice(10) + ' to `admins.txt`');
  }
  if (message.content.startsWith("j.req")) {
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(":x: " + eeggtwo[Math.floor(Math.random() * eeggtwo.length)])
      return;
    }
    message.channel.send(':heavy_check_mark: Success: Found ID in `admins.txt`')
  }
});
    function shuffle(string) {
  let array = string.replace(/  /gi, ' ').split('')
  array.sort(() => Math.random() - 0.5);
  return array.join("")
}
function reverse(text){
  return text.split("").reverse().join("");
}
/*/
  }
  if (message.content.startsWith("j.dadmode")) {
  if (message.content.substring(10) === "off") {
  dadmode = 0;
  message.channel.send(":x: Dad mode: OFF. Dad must have gone on a business trip.")
  }
else if (message.content.substring(10) === "on") {
  dadmode = 1;
  message.channel.send(":heavy_check_mark: Dad mode: ON. Send a message starting with **I'm** to begin.")
}
  else {
    message.channel.send(":x: I couldn't understand. If you would like to turn dad mode off, type `j.dadmode off`. If you want to turn it back on, type `j.dadmode on`.")
  }
  if (message.content.startsWith("I'm") && dadmode == "1") {
  message.channel.send("Hi, " + message.content.substring(4) + ", I'm Dad!")
}
if (message.content.startsWith("j.a")) {
    message.delete().catch(_O_o => { });
    message.channel.send(':x: An error occurred. Please type j.fix to fix the problem')
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play('eletricshock.mp3');
  }
//client.guilds.size
/*/

client.on('message', async message => {
  const args = message.content.split(' ');
  const command = args.shift().toLowerCase();

  if (message.content.startsWith('j.die')) {
    // Put your userID here
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(':x: Bro, You cant just tell someone to die! You need `BOT_ADMIN` or higher to use this command. Access Denied!');
      console.log('[MSG] [ERROR] :x: Bro, You cant just tell someone to die! You need `BOT_ADMIN` or higher to use this command. Access Denied!')
      return
    } else {
      try {
        console.log('[MSG] :warning: <a:Loading_Color:759914061696860202> Shutting Down...')
        message.channel.send(":warning: <a:Loading_Color:759914061696860202> Shutting Down...");
        setTimeout(function(){             client.destroy()     }, 1000);
      } catch (error) {
        message.reply(':x: Failed to shutdown. Error in the terminal.');
        console.log('[MSG] [ERROR] :X: Failed to shutdown: ')
        messsage.channel.sendEmbed(embed).catch(err => console.log(err));
      }
    }
  }
  if (message.content.startsWith('j.eval')) {
    // Put your userID here
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(':x: *You told them to do something, the bot refused, It seems like you need `BOT_ADMIN` to use this command.*');
      return
    } else {
      try {
        evaled = await eval(args.join(' '));
        message.channel.send("```js" + "\n" + inspect(evaled) + "```");
        console.log(inspect(evaled));
      }
      catch (error) {
        console.error(error);
        message.channel.send(':x: ***Oops! An error occurred!***\n' + eegg[Math.floor(Math.random() * eegg.length)] + "\n```js" + "\n" + inspect(error) + "```");
      }
    }
  }
    });


/*/
client.on('message', async message => {
  const args = message.content.split(' ');
  const command = args.shift().toLowerCase();
  
  if(message.content.startsWith('j.eval ')){
    // Put your userID here
    if (message.author.id !== '461984828716482562') return;
    message.channel.send(':x: *You told them to do something, the bot refused, It seems like you need `BOT_OWNER` to use this command.*');
    let evaled;
    try {
      evaled = await eval(args.join(' '));
      message.channel.send("```js" + "\n" + inspect(evaled) + "```");
      console.log(inspect(evaled));
    }
    catch (error) {

      console.error(error);
      message.channel.send(':x: ***Oops! An error occurred!***\n' + eegg[Math.floor(Math.random()*eegg.length)] + "\n```js" + "\n" + inspect(error) + "```");
    }
  }
});
/*/
//                                                 -=The unsorted stuff=-
/*/
    const filter = (reaction, user) => {
      return ['👍'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    
    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first();
    
        if (reaction.emoji.name === '👍') {
          message.reply('Fixing...');
          const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' }));
        } else {
          message.reply(':x: An error occurred');
        }
      })
      .catch(collected => {
        message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
      });
  }
  /*/

/*/
  }
  if (command === 'j.login ') {
    // Put your userID here
    if (message.author.id !== '461984828716482562') return;
    message.channel.send(":noentry: bot owner only");

    let evaled;
    try {
    client.login(message.content.slice(8));
    }
    catch (error) {
      console.error(error);
      message.reply(':x: Whoops! an error occurred!');
      messsage.channel.sendEmbed(embed).catch(err => console.log(err));
    }
    return
/*/
/*/
	  if(message.content.startsWith('j.ecalc ')){
           message.content = message.content.slice(8)
            message.content = message.content.replace(/plus/g, '+').replace(/times/g, '*').replace(/minus/g, '-').replace(/divided by/g, '/').replace (/mod/g, '%').replace(/to the power of/g, '^').replace(/\^/g, '**')
            if(message.content.match(/[a-zA-Z]/i)){
                message.channel.send(':x: You can only use plus, times, minus, divided by, mod, and to the power of.')
               return
            }else{
            if(message.content == message.content.replace(/^(1|2|3|4|5|6|7|8|9|0|\+|\*|\-|\/|\%|\**|\(|\)|\.|\,)/gi, '')){
                message.channel.send(':x: Just nope')
                return
            }else{
                try{
                    value = eval(message.content)
                }catch(err){
                    console.error(err);                   
	            message.channel.send(':no_entry: ***Calculation Error***\n' + eegg[Math.floor(Math.random()*eegg.length)] + "\n```js" + "\n" + inspect(err) + "```");
                    return
                }
                try{
                    message.channel.send('🖩' + value.toString())
                }catch(err){
                    message.channel.send('🖩' + message.content +'.toString() failed')
                    return
                }
                console.log(value)
            }
        }
    }

/*/
//CALC FUNCTION
function calc(s) {
  //remove all spaces except ones inside ""
  s = s.split(' ').join('');

  var br = 0;

  //loop 1. addition and substraction
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[') {
      br++;
    } else if (s[i] == ')' || s[i] == ']') {
      br--;
    } else {
      if (br == 0) {
        if (s[i] == '+') {
          return calc(s.slice(0, i)) + calc(s.slice(i + 1));
        }
        if (s[i] == '%') {
          return calc(s.slice(0, i)) % calc(s.slice(i + 1));
        }
        if (s[i] == '-' && i != 0) {
          return calc(s.slice(0, i)) + calc(s.slice(i));
        }
      }
    }
  }

  //loop 2. multiplication and division
  br = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[') {
      br++;
    } else if (s[i] == ')' || s[i] == ']') {
      br--;
    } else {
      if (br == 0) {
        if (s[i] == '*') {
          return calc(s.slice(0, i)) * calc(s.slice(i + 1));
        }
        if (s[i] == 'x') {
          return calc(s.slice(0, i)) * calc(s.slice(i + 1));
        }
        if (s[i] == '/') {
          return calc(s.slice(0, i)) / calc(s.slice(i + 1));
        }
        if (s[i] == '÷') {
          return calc(s.slice(0, i)) / calc(s.slice(i + 1));
        }
      }
    }
  }

  br = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[') {
      br++;
    } else if (s[i] == ')' || s[i] == ']') {
      br--;
    } else {
      if (br == 0) {
        if (s[i] == '^') {
          return Math.pow(calc(s.slice(0, i)), calc(s.slice(i + 1)));
        }
      }
    }
  }

  if (s[0] == '-') {
    return -calc(s.slice(1));
  }

  //Check for functions

  if (s.split('(')[0] in Math) {
    var arg = s.slice(s.split('(')[0].length + 1, s.length - 1) + ',';
    var args = [];
    var ar = '';
    br = 0;
    for (var i = 0; i < arg.length; i++) {
      if (arg[i] == '(') {
        br++;
      }
      if (arg[i] == ')') {
        br--;
      }
      if (arg[i] == ',' && br == 0) {
        args.push(calc(ar));
        ar = '';
      } else {
        ar += arg[i];
      }
    }
    return Math[s.split('(')[0]](...args);
  }

  //Return raw value
  if (s[0] == '(' && s[s.length - 1] == ')') {
    return calc(s.slice(1, s.length - 1));
  } else {
    return Number(s);
  }
}









//                                                                  *** UNUSED STUFF ***

  /*/
    if (message.content.startsWith("j.explode")) {
  const options = {
    hostname: 'svr.ziad87.net',
    path: '/api',
    headers: {
        Authorization: '98659b5fddebe5376390b204eddf1c9cbf82eadb207efcc22f0dbc47395f56de'
    }
  }
      message.channel.send('<a:Loading_Color:759914061696860202> :bomb: *Lighting up the bomb...*').then(msg => {
      require('https').get('https://svr.ziad87.net/api/viral?avatar1='+message.content.slice(5), function (response) { response.on('data', function (options) { message.channel.send(String(response)) }) })
      console.log('[RESPONSE VARIABLE] '+response)
      console.log('[OPTIONS VARIABLE] '+options)
      console.log('[STRING] '+String(response))
      msg.delete();
      return;
      });
    }
    /*/
  /*/
      let thingtosend = message.content.slice(6).removepings()
      var code = c
      if (thingtosend == code) {
        message.channel.send("You are logged in!");
      } else {
        message.channel.send("Invalid bot admin password. The password might be expired.");
      }
        if (message.content.startsWith("j.passgen")) {
      if (!adminlist.admins.includes(message.author.id)) {
        message.channel.send(':x: `Error: No Bot Admin! If you need a code for j.login, DM me! Jacobw#8117`')
        return;
      } else {
        var c = letters+letters+letters+letters
        message.author.send("The code for j.login is `"+c+"`")
      }
      return
    }
      if (message.content.startsWith("j.login ")) {
      message.channel.send(":x: Login system discontinued. Please ask us to give bot admin.");
      }
      /*/

/*/
var news = ['/b/ is dead','Todays News','Something','idk','Nothing on today','12bot has been triggered beacuz he hasnt been used for years','toys r us is ded (maybe)', 'The long-desired Scratch app was finally released. The app features a colorful blue link to the main website, acting as a shortcut for mobile browsers.','Scientists in Antarctica have found strange footprints and think they are the creator of Scratch's. He fled to Antarctica years ago and is now unheard of.','Griffpatch has released his long-awaited sequel to ScratchNapped: "Cutie Honey and the Kidnapper of the 78th Century." In that game, Cutie Honey must work to destroy the forces of Scratch by depriving them of their energy units. Why the Scratch Team allowed this game, I don't know. Who is Cutie Honey, anyway?!','Prior to retiring, the Scratch Team wanted to leave a good ego by conserving electricity. To do so, they completely unplugged two of their servers. To assure that no one ever plugs them in again for environmental reasons, they dumped them into the Atlantic Ocean and ~~killed millions of poor whales~~ :( Err.... https://i.kym-cdn.com/entries/icons/original/000/019/907/maxresdefault.jpg','Kaj has been chosen as the ~~five-trillion-five-hundred-sixty-nine-billion-four-hundred-thirty-seven...~~ 5,569,437,108,142th curator on the Front Page. Feel free to congratulate Kaj on their profile!','Effective immediately, the Wiki, along with the rest of the Internet, will now be closed on Fridays because everyone in the world will be too busy eating waffles to even turn on their computers. It will still be open 24/6. We understand that this will prevent you from showing people your 1,000 contribs at upcoming Friday school dances. Those dances are supposed to end the world, anyway, and the logo has invisible strawberry straps, which are banned at the dance end of world thing. We apologize for the inconvenience.','The sixty-second rule has been abolished, an update to the forums many Scratchers have been waiting for up to 100 years. To celebrate, the Scratch Team have taken the 120 second rule down to only 12 seconds. To ensure that the ~~small~~ large group of Scratchers who appreciated the rule do not miss it, a new rule has been added in, the infinity second rule, which will be removed in approximately infinity years. The latter only applies to Scratchers. Wait, why did I type this all out?','~~Scratch~~ Kaj has now added homework to the website. If you do not give ~~us~~ Kaj 50,000 energy units in one week, you will be **BANNED**','14th February 2018: Scratch Cat accidentally scratched the Scratch Servers and made it explode. It was fixed in 1 yoctosecond.','4th January 2018: Twilight Sparkle now has all the Butterfingers in the world but you can get one if you give her all the money in the world.','lw82 ate over 90000,00000,00000,0000,0000 Pizza "**roles**". this was the biggest record broken https://cdn.discordapp.com/attachments/462290884537352204/658425498346717226/unknown.png']
  if (message.content.startsWith("j.req")) { 
  if(findadmin.admins.includes(message.author.id)) {
  message.channel.send(':heavy_check_mark: Success: Found ID in `admins.txt`');

  return; 
  } else {
  message.channel.send(":x: "+eeggtwo[Math.floor(Math.random()*eeggtwo.length)]);
  }
}
  if (message.content.startsWith("j.bogrant ")) { 
  if(findadmin.admins.includes(message.author.id)) {
  let idtoadd = message.content.slice(10)
  findadmin.push(idtoadd)
  fs.writeFileSync('admins.txt',JSON.stringify(admins))
  message.channel.send(':heavy_check_mark: Success: Added admin id '+message.content.slice(10)+ ' to `admins.txt`');
  return; 
  } else {
  message.channel.send(":x: Error: No Admin!");
  }
}
/*/





/*/
    if((gay+'').match(/\./)||gay = 69){
            message.channel.send(":rainbow_flag: **" + message.content.slice(6) + "** is " + gay + "% gay.  ( ͡° ͜ʖ ͡°)")
            }
    if((gay+'').match(/\./)||gay = 100){
            message.channel.send(":rainbow_flag: **" + message.content.slice(6) + "** is " + gay + "% gay. Wow, you are very gay.")
            }
/*/



function scrolltext(text) {
  var lines = text.split('\n');
  var output = '';
  var maxlen = Math.max(...lines.map(li => li.length));
  if (maxlen < 4) maxlen = 4;

  output += ' ' + '_'.repeat(maxlen + 3) + '\n' +
    '/\\' + ' '.repeat(maxlen + 2) + '\\\n';

  for (var i = 0; i < lines.length; i++) {
    output += ' | ' + lines[i] + ' '.repeat(maxlen - lines[i].length) + ' |\n';
  }

  output += ' | ' + '_'.repeat(maxlen + 1) + '|_\n' +
    ' \\/' + '_'.repeat(maxlen + 2) + '/';

  return output;
}




function createLadder(laddernum) {
  "use strict"
  return "╠═══╣Lets build a ladder╠═══╣\n".repeat(laddernum).slice(0, -1)
}

//HALPMEIHAVETOOMANYDONUTSPLSS


//Codes that are set aside

client.on(`guildCreate`, _guild => {
  // update status
  client.user.setActivity(client.guilds.size + " Servers // j.help", { type: "Watching" }); //Activities: Playing, Watching, Listening 
});


// client.on('message', msg => {
//    if(msg.content.startsWith('j.uppercase ')){ //comments are useless *cums in comments while comments moan*
//       var e = msg.toUpperCase(); *oh yeh look at that sexy line of code im putting that strait up my ass
//       msg.channel.send(e.slice(9)) //no u
//    }
// })
//        if(msg.content.startsWith('j.math ')){
//           msg.content = msg.content.slice(7)
//            msg.content = msg.content.replace(/plus/g, '+').replace(/times/g, '*').replace(/minus/g, '-').replace(/divided by/g, '/').replace// (/mod/g, '%').replace(/to the power of/g, '^').replace(/\^/g, '**')
//            if(msg.content.match(/[a-zA-Z]/i)){
//                msg.channel.send('message', 'You can only use plus, times, minus, divided by, mod, and to the power of.')
//               return
//            }else
//            if(msg.content == msg.content.replace(/^(1|2|3|4|5|6|7|8|9|0|\+|\*|\-|\/|\%|\**|\(|\)|\.|\,)/gi, '')){
//                msg.channel.send('message', 'Just nope')
//                return
//            }else{
//                try{
//                    value = eval(data.msg)
//                }catch(err){
//                    msg.channel.send('message', 'Eval error occurred')
//                    return
//                }
//                try{
//                    msg.channel.send('message', value.toString())
//                }catch(err){
//                    message.channel.send('message', data.message+'.toString() failed')
//                    return
//                }
//                console.log(value)
//            }
//        }

//


/*mistake*/

/*/
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
  console.log('[READLINE] [MSG]' + answer);
})
/*/

function foo(bar) {
  console.log(bar);
}


/*/
message.channel.startTyping(); //Makes the bot type

message.channel.stopTyping(); //Stops the typing
/*/
/*/

  if (message.content.startsWith("j.join")) {
   if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.channel.send(':warning: Cannot join: `You must join in a voice chat, THEN run this command`');
    }
  }
    return
  }
/*/

/*/
const corona_activity = [
    "Wash your hands!",
    "Dont touch your face!",
    "Stay Home!",
    "COVID-19 is spreading! Stay home and stay safe!",
    "Stay Home.",
    "Dont go in to crowded areas!",
    "Clean your hands often. Use soap and water, or an alcohol-based hand rub.",
    "Stay Home! and stay safe!",
    "Stay Safe!",
    "Do the 5!",
    "1. STAY home as much as you can",
    "2. KEEP a safe distance",
    "3. WASH hands often",
    "4. COVER your cough",
    "5. SICK? Call ahead"
    ]; // creates an arraylist containing phrases you want your bot to switch through.cd...

  if (message.content.startsWith("j.scrambleegg")) { //
    message.channel.send(scrambleegg[Math.floor(Math.random()*scrambleegg.length)] + scrambleegg[Math.floor(Math.random()*scrambleegg.length)] + scrambleegg[Math.floor(Math.random()*scrambleegg.length)]);
    return
}
  if (message.content.startsWith("eg")) { //
    if (message.guild.id == 516625134044577792) {
      console.log("[REACTION] Reacted Emoji: Egg");
      message.react('🥚');
      return
    }
  }
  if (message.content.startsWith("Eg")) { //
    if (message.guild.id == 516625134044577792) {
      console.log("[REACTION] Reacted Emoji: Egg");
      message.react('🥚');
      return
    }
  }
/*/

//    message.reply('Look in dms!');
//    message.author.send("Commands:\n help -- Shows this list\n ban <user>^ -- Ban a user. This was the hardest command i ever did on this bot \nkick <user>^ -- Kick a user.\n test -- test the bot message\n ping -- Pong! shows the ms.\n hi (hello) -- Says hello \n lol -- says Haha funny! \n eval <js> --test code in the bot, not sandboxed\n retrojbot -- says thats me!\n about -- Tells you about the bot, and credits\n invite -- Invite me to your server!\n owo -- responds with whats this?\n nsay <text> -- the bot repeats of what ur saying\n 8ball [question] -- ask the magic 8ball!\n addsac -- add 1+ in the commuity\n ~~counter~~ -- Your own counter.\n countsa -- shows you how much does the commuity counter.\n ss <something> -- Send a nice message to our server **NSFW IS NOT PERMITTED!** \ndonothing -- A command that doesn't do anything. \nthot <text or user> -- BEGONE THOT!\n version -- the version of the bot\n login <code>^^^ -- Enter a password through `client.login`");  
    //message.author.send("HALPMEIHAVETOOMANYDONUTSPLSS -- AAA I HAVE A BUNCH O' DONUTS!\n die^^^ -- shutdown the bot\n admincommands -- Same thing as j.help, but only bot owner only commands\n inspirobot -- get a random quote from inspirobot\n ~~ping2 -- Pong! without the ms.~~\n nsay <text> -- same thing as j.say, but it deletes your message after running it\n uselessweb -- go in to a random useless website\n 1ball [qestion] -- Are you hired? or fired? shake this ball to find out!\n 69ball [qestion] -- the funny ball.\nreacttest -- Testing the Reactions\n ~~dadmode <on/off> -- Enable / Disable Dad Mode~~\n oof -- **Im pissed** \nguildid -- Veiw the Guild ID\n gay [user or something]\n~~news~~ -- Whats the fake news today?\n ftc <number>-- Convert F to C\n ctf <number> -- Convert C to F\n itc <cm> -- Scale stuff, i guess?");  
//    message.author.send("dice [number] -- roll the dice!\n calc <equation> -- Calculate math problems! Use RetroJBOT As your calculator!\n~~ecalc -- Calculator but with eval~~\n ~~react <emoji> -- React a emoji on ur message~~\n ~~lmos --  Longest Moment Of Silence, tts will play.~~ (Broken)\n coinflip [question] -- Tails or heads?\nyesno -- Kinda like the magic 8 ball, but it only says yes or no.\ndate -- Show the todays date.\ntime -- Show the time\nservercount -- How many servers i am in?\n d20 -- Roll a d20\n slap <someone> -- Slap someone!\n ~~scrambleegg -- Scrambles the word egg~~ (removed)\nfeedback <feedback> -- If you want to leave a suggestion / bug report or whatever, then this is for u. If you want to keep it anonymous, Please do j.privatefeedback <feedback>. do not use j.privatefeedback if its a appeal Unless you have a Discord ID with it, We promise! We wont sell your personal info to anywhere! Not even the dark web. \nhug <someone> -- Hug someone!\nfuck <someone> -- Just... dont...\npurge^ <number> -- Purge more then one message\n9ball -- Old version of 8ball v1.0.0\nKill <someone or whatever> -- Kill a person!\nuppercase (uc) <whatever u want> - Changes all text to CAPS\nlowercase <text> (lc) -- Changes all text to no caps\n rll -- Random Lowercase Letter\n rul -- Random Uppercase Letter\nhonk -- Gets a goose desktop meme\ndog -- Get a random dog image\nCat -- Get a random cat image\nfox -- Get random Fox boi\nsban -- Server Send BAN.\n s1 -- generates random shit to make nonsese\n snuggle <user or something> -- Snuggle some one! :3\nbird -- Gets a random bird.\n lizard -- Gets a photo of a lizzard!\n owl -- Gets a photo of a owl! Owol!\n tiger -- gets a random tiger boi.\n req -- Request for bot admin, or check if you have bot admin.| v3.0.4 RetroJBOT Banana Edition")



//RetroJBot is a successor of 93!bot or 93bot, and 42bot, those two bots connect to each other, however, 42bot has been never made in discord. the `j.ping` is from the 42bot. 93bot is a trollbox bot that has been copied from lw82, trees tree or lw82s bot IS NOT the offical bot, 93bot is its own code. (c) 2019-2020 this bot has been made by Jacob Workman#8117. Credits: Special thanks to Ojproj, HOST for helpping me, and zaid87 for the `j.ping` and for helping me how to set up a bot! :D, `j.uselessweb` code by https://theuselessweb.com/, and lw for the code...? **If you were forgotten on here or if you want your code removed, Please DM My creator, Jacob Workman#8117 or join my discord. here is the command for that: `j.invite`***, And thats it! have fun!

/*/
 if (message.content.startsWith("j.quit")) {
    message.channel.send("***Quit?***");
    message.channel.send(">>> Please note that when you do this, you won't be able to rejoin unless you had an invite. Quit now?\nthis command is expermental btw. Report bugs with j.feedback");
    const filter = (reaction, user) => {
	return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
};
message.react('✅').then(() => message.react('❌'));
message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '✅') {
      message.reply('Goodbye... :(');
      
		} else {
			message.reply('Ok. Nevermind.');
		}
	})
	.catch(_collected => {
		message.reply(":x: You took too long to respond!");
  });
  return
  }
  /*/
  /*/
    let thingtosend = message.content.slice(6).removepings()
    var code = c
    if (thingtosend == code) {
      message.channel.send("You are logged in!");
    } else {
      message.channel.send("Invalid bot admin password. The password might be expired.");
    }
      if (message.content.startsWith("j.passgen")) {
    if (!adminlist.admins.includes(message.author.id)) {
      message.channel.send(':x: `Error: No Bot Admin! If you need a code for j.login, DM me! Jacobw#8117`')
      return;
    } else {
      var c = letters+letters+letters+letters
      message.author.send("The code for j.login is `"+c+"`")
    }
    return
  }
    if (message.content.startsWith("j.login ")) {
    message.channel.send(":x: Login system discontinued. Please ask us to give bot admin.");
    }
    /*/