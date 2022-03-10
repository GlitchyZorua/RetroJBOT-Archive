module.exports = {
    name: 'yesno',
    async execute() {
      return Math.random() > 0.5 ? "yes" : "no";
    }
}