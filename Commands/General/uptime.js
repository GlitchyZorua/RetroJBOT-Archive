module.exports = {
    name: 'uptime',
    async execute(client, message, args) {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        return `:arrow_up: Uptime: ${days}:${hours}:${minutes}:${seconds}\n\n:warning: Due to server limitations, the bot might go offline with or without notice.`;
    }
}