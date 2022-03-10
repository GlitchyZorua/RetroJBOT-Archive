const myself = [
  "myself",
  "retrojbot",
  "@retrojbot",
  "<@612742660658167840>",
  "retrojbot#3932",
  "@retrojbot#3932",
  "461984828716482562",
]
module.exports = {
    name: 'rate',
    async execute({ input }) {
        if (input.toLowerCase() == "fortnite") return "I rate fortnite 0/10";
        if (myself.includes(input)) return "I rate myself 10/10"
        if (input.toLowerCase() == "you can't activate this easter egg. isn't that weird?") return "This message shouldn't appear... if you did then... congrats!";
        const rate = Math.floor(Math.random() * 10)
        return `I rate ${input} ${rate}/10`;
    }
}