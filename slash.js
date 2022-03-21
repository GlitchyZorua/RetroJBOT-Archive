const { MessageEmbed, CommandInteraction } = require("discord.js");
const defaultMessageOptions = { allowedMentions: { parse: [] } };
const commandList = [];
const toSlash = ["gay", "fish", "8ball", "calc", "ss", "fact"];
module.exports = function (client) {
    toSlash.forEach(function (command) {
        commandList.push({
            type: "CHAT_INPUT",
            name: command,
            description: client.commands.get(command).help,
            options: client.commands.get(command).options,
        });
    });
    client.application.commands.set(commandList, "462290884537352202"); //fast load
    client.application.commands.set(commandList);
    client.on("interactionCreate", function (interaction) {
        if (interaction instanceof CommandInteraction) {
            let replied = false;
            const command = client.commands.get(interaction.commandName);
            const send = async function (message) {
                if (typeof message === "string") {
                    message = { content: message };
                }
                else if (message instanceof MessageEmbed) {
                    message = { embeds: [message] };
                }
                message = { ...defaultMessageOptions, ...message };
                interaction[replied ? "followUp" : "reply"](message).catch(console.error);
                replied = true;
            };
            command.slash({
                interaction: interaction,
                options: interaction.options,
                client: client,
                caller: interaction.user,
                authorId: interaction.user.id,
                send: send,
                async callCommand(input) {
                    const output = await command.execute({
                        slash: true,
                        client: client,
                        caller: interaction.user,
                        authorId: interaction.user.id,
                        message: interaction,
                        input: input,
                        send: send,
                    });
                    if (output) send(output);
                }
            });
        }
    });
};
/* temp will move */