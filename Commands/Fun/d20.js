module.exports = {
    name: 'd20',
    async execute(client, message, args) {
        return Math.floor((Math.random() * 30) + 1).toString();
    }
}