module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(c => c.category == 'Infos').map((c) => '`' + c.name + '`').join(', ');
            const music = message.client.commands.filter(c => c.category == 'Music').map((c) => '`' + c.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: '#73C7E8',
                    author: { name: 'Help pannel' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music', value: music },
                        { name: 'Filters', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
                        { name: 'Support', value: 'Link to my support [**server**](https://discord.gg/EKgdpdezCR)' },
                        { name: 'Bot Link', value: 'Click here to Invite me [**Invite**](https://discord.com/api/oauth2/authorize?client_id=777772300517900288&permissions=37080128&scope=bot)' },
                    ],

                    description: `To use filters, ${client.config.prefix}filter (the filter). Example : ${client.config.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(c => c.aliases && c.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - **No __Commands or Modules__ Found**`);

            message.channel.send({
                embed: {
                    color: '#A7DBFB',
                    author: { name: 'Help pannel' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join('\n'), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.prefix), inline: true },
                    ],
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};