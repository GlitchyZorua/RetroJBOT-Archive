module.exports = {
    name: 'fact',
    async execute(client, message, args) {
      var easteregg = ['Loading...','You just got to have a loading animation.','Loading...','Loading...','Loading...','HeY gUys lOok aT thIS cOOl LoaDing AnImATioN!','Please wait...','Haryie, why do you think this loading animation is cringe?','Loading...','[Insert loading message here]','Loading...','Loading...','Loading...','Loading...','Loading...','Loading...','Loading...','Loading...','Loading...','Loading...','Loading...','<a:HELP:782090880370212886> i AM TRYING TO LOAD, BUT I AM STRUGGLING PAINFULLY PDJHGKIPHJMGFLK HaLP']
      var easteregga = easteregg[Math.floor(Math.random() * easteregg.length)]
   //   var facts = ["nobody ever says that duri ngsex shut uthe fuck up  :) ~ Nutshinou","kdfgjnhbfgidobfgbjfg ~ Jacob","Fun Fact","Yes.","No.","Maybe","::; ;;;;;","In ALL of nintendo's games (with slopes), they have atleast one unintended glitch with their slopes ~ Nutshinou","supreme is actually a banana ~ Mikmax","Some of these facts aren't real. ~ Jacob","I found some of these facts while searching servers. ~ Jacob","Submit your facts at `j.feedback`! ~ Jacob","you cannot spell pharmacy without 'harm'","im sick","how","its in reality MaxWellhouse ~ Supreme Noob","supreme original name was boon and builder noob ~ Mikmax","Did you know that there is an random chance that it actually shows a fact from an api or from a list? ~ Jacob","mikmax7001 love marshmello when he hates marshmellows ~ Supreme Noob.","mikmax7001 loved peashooter before ~ Supreme Noob"," ","you can ban ralsei/lucario/idiot/joam ~ Supreme Noob","Did you know that some of these facts are real, and some aren't? ~ Jacob","mojang actually used real panda sounds for the mob in minecraft! ~ MasoMir","a phone screen has ~the same amount of germs as a toilet seat",'I was lazy to code this fun fact thing','did you know 1+1=2','did you know 2+2=4','did you know that you can give us a idea for the bot/ideas for j.fact using j.feedback?','quack','fact','fun']
     // var zxz = [Math.floor(Math.random() * 1 + 0)]
      //var bjpi = zxz[Math.floor(Math.random() * zxz.length)]
      //if (bjpi = 0) {
        message.channel.send('<a:Loading_Color:759914061696860202> '+easteregga).then(msg => {
          console.log('[MSG] <a:Loading_Color:759914061696860202>'+easteregga);
          msg.delete();
        });
        require('https').get('https://uselessfacts.jsph.pl/random.txt?language=en', function (d) { d.on('data', function (n) { message.channel.send(String(n)) }) })
        return
    }
}