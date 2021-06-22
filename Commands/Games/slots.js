const talkedRecently = new Set();

module.exports = {
    name: 'slots',
    async execute(client, message, args) {
      if (talkedRecently.has(message.author.id)) {
         message.channel.send(":alarm_clock: **Cooldown** You can only use the slots per minute, Please slowdown. *tick tock* ");
   } else {
      let a = (r) => { return Math.floor(Math.random() * r.length) };
      let b = (r) => { return r.replace(/\[1]/g,':strawberry:').replace(/\[2]/g,':pineapple:').replace(/\[3]/g,':slot_machine:').replace(/\[4]/g,':seven:'); };
      let c = ['1','2'][a(['1','2'])];
      let d = (r) => { if(r == '1'){ let v = ['[1]','[2]','[3]','[4]']; let g = v[a(v)]; return b(g+' '+g+' '+g) } else if(r == '0') { let v = ['[1]','[2]','[3]','[4]']; let ho = new Array(); for(let i = 0; i < 3; i++){ let gv = a(v); ho.push(v[gv]); v.splice(gv, 1); }; return b(ho[0]+' '+ho[1]+' '+ho[2]) } else { let v = ['[1]','[2]','[3]','[4]']; return b(v[a(v)]+' '+v[a(v)]+' '+v[a(v)]) } };
      if(c == '1'){
         message.channel.send(d()).then(msg => {
            for(let i = 0; i < 7; i++){
               setTimeout(() => {
                  msg.edit(d());
               }, 2000);
            };
            setTimeout(() => {
               msg.edit(d('1')+'\n:slot_machine: You won!');
            }, 2000);
         });
      } else {
         message.channel.send(d()).then(msg => {
            for(let i = 0; i < 7; i++){
               setTimeout(() => {
                  msg.edit(d());
               }, 2000);
            }
            setTimeout(() => {
               msg.edit(d('0')+'\n:slot_machine: You lost!');
            }, 2000);
         });
      }
    return
    }
   }
}