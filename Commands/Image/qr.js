const Discord = require("discord.js");
module.exports = {
    name: 'qr',
    async execute({ input }) {
        if (input === "") return ":octagonal_sign: Syntax Error. Syntax: j.qr <text>";
        return new Discord.MessageEmbed().setImage("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(input));
    }
}