const advice = {
    good: ["Follow your heart, but remember to take your brain with you!", "Do something today that you'll thank yourself for tomorrow!", "Life is short, so smile while you still have teeth!", 'Pain doesn\'t last forever.', `If opportunity does not knock, you can always build a door!`],
    bad: ["Anything is okay as long as you don\'t get caught!", "Yell ***ALL THE TIME!!***", "When life gives you lemons... Start a Lemonade stand in front of a Train Station and give away complimentary train passes with each purchase of lemonade.", "Listen to everyone's advice.", "Don't be ugly."],
    ok: ["Not all advice is good advice.", "Never make eye contact while eating a banana.", "It is not wise to listen to advice from a rock.", 'Your problems will catch up to you eventually.', `There are approximately 238,900 miles between the Earth and the Moon.`],
};
const talkedRecently = new Set();

module.exports = {
    name: 'wiserock',
    async execute({ message, send, authorId}) {
        if (talkedRecently.has(authorId)) return ":alarm_clock: **Cooldown** Sorry. You need to wait 9 seconds to use this command. Be patient or i will cut Basil in half.... hehehehe. 🍉";
        const sentMessage = await message.channel.send({
            content: "<:Big_wise_rock:946959662320877589> Hi, I'm the Wise Rock! I give solid advice in exchange for ~~clams~~ Free!\n\n\nWhat kind of advice would you like me to give?",
            components: [
                {
                    type: "ACTION_ROW",
                    components: [
                        {
                            type: "BUTTON",
                            label: "Good Advice",
                            style: "SUCCESS",
                            customId: "good"
                        },
                        {
                            type: "BUTTON",
                            label: "Ok Advice",
                            style: "SUCCESS",
                            customId: "ok"
                        },
                        {
                            type: "BUTTON",
                            label: "Bad Advice",
                            style: "SUCCESS",
                            customId: "bad"
                        },
                    ]
                }
            ]
        });
        const filter = (button) => button.user.id === message.author.id;
        const collector = sentMessage.createMessageComponentCollector({ filter: filter, max: 1, time: 60000, componentType: "BUTTON" });

        collector.on("collect", interaction => {
            const rock = (...message) => `<:Big_wise_rock:946959662320877589> ${String.raw(...message)}`;
            // use rock`message` (I Love template tagging!)
            interaction.reply(rock`Understood. Here is your advice.`);

            setTimeout(function() {
                const pool = advice[interaction.customId];
                send(rock`${pool[Math.floor(Math.random() * pool.length)]}`);
            }, 1000);

            setTimeout(function() {
                send(rock`Hope this helps!`);
            }, 2000);
            talkedRecently.add(authorId);
            setTimeout(() => {
                // Removes the user from the set after 9 seconds
                talkedRecently.delete(authorId);
              }, 9000);
        })
    }
}
