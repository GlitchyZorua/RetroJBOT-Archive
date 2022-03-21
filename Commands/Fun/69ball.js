/*/
🟢 = yes
🟡 = cannot predict/idk
🔴 = no
⚫ = comment
/*/
const nball = ['🟢 of course you uneducated paperclip', '🔴 of course not. I bet you eat Nintendo switch cartridges of fortnity-nite for breakfast', '🟡 idk dude, btw i dont care, btw fuck u', '🟡 ahh im 2much lazy 2 answer now, ask again later', '🟡 dude idgaf, that question is a crap, i ll not respont it', '🔴 OMG NO, OFC NO, R YA CRAZZZZZZYYYY?', '🟡 hm? What? Sorry, I was too busy staring at that ugly mask of yours. Whats that? Its not a mask?']
module.exports = {
    name: '69ball',
    async execute() {
        return ':8ball: ' + nball[Math.floor(Math.random() * nball.length)];
    }
}