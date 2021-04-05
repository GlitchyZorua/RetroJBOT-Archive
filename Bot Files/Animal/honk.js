var honk = ['https://cdn.discordapp.com/attachments/472492523386830850/699368048628334622/GooseDance.gif', 'https://cdn.discordapp.com/attachments/472492523386830850/699368081444700221/Meme1.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368136084029470/Meme2.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368176949133372/Meme3.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368223673417750/Meme4.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368263045480538/Meme6.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699368340963196938/Meme7.png', 'https://cdn.discordapp.com/attachments/472492523386830850/699369471529320498/Meme5.png']
var honkyes = honk[Math.floor(Math.random() * honk.length)]
module.exports = {
    name: 'honk',
    async execute(client, message, args) {
        message.channel.send(honkyes)
        console.log("[MSG] " + honkyes)

    }
}