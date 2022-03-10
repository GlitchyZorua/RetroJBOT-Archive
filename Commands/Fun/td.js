module.exports = {
    name: 'td',
    async execute() {
      return Math.random() > 0.5 ? "truth" : "dare";
    }
  }