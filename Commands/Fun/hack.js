const hack = ["Loading...", "Please wait...", "Hacking...", "Bruteforcing Password", "Cracking...", "Injecting Exploit...", "Bruteforcing Internet Wi-Fi password...", "Connecting to Tor...", "Sending Personal Data to ?>ERROR>?...", "Cooking your data..."]
const percentages = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '99'];
const talkedRecently = new Set();
const randomHack = () => hack[Math.floor(Math.random() * hack.length)];
module.exports = {
  name: 'hack',
  async execute({ input, message, authorId }) {
    if (talkedRecently.has(authorId)) return ":alarm_clock: **Cooldown** ...bruh, let me take a 9 second break after hacking... *tick tock*";
    if (input === "") return ":x: **HACK FAILED** Syntax Error! Syntax: j.hack <text>";
    talkedRecently.add(authorId);
    setTimeout(() => {
      // Removes the user from the set after 9 seconds
      talkedRecently.delete(authorId);
    }, 9000);
    let cook = await message.channel.send(`<a:Loading_Color:759914061696860202> ${randomHack()} - 0%'`);
    let i = 0;
    let interval = setInterval(function () {
      if (i >= percentages.length) {
        cook.edit(`Successfully hacked ${input}!`);
        clearInterval(interval);
        return;
      }
      cook.edit(`<a:Loading_Color:759914061696860202> ${randomHack()} - ${percentages[i++]} %`);
    }, 1000);
  }
};