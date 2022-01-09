module.exports = {
    name: 'cl',
    async execute(client, message, args) {
let thingtosend = message.content.slice(4)
if (thingtosend === ""){
message.channel.send(":x: Syntax Error! Syntax: j.cl <text>")
return
}
let letterCount = thingtosend.replace(/\s+/g, '').length;
let wordCount = thingtosend.match(/(\w+)/g).length;
message.channel.send('🔢 **Words and Letters**\nLetters: '+letterCount+'\nWords: '+wordCount)
}
}