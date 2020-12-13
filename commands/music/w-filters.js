module.exports = {
    name: 'w-filters',
    aliases: ['filt'],
    category: 'Music',
    utilisation: '{prefix}w-filters',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send ({
            embed: {
                color: '#FA1D2F',
                description: 'you must be in a voice channel to use this command.'
            }
        })

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send ({
            embed: {
                color: '#FA1D2F',
                description: 'Oh-oh! we are not in the same voice channel.'
            }
        })

        if (!client.player.getQueue(message)) return message.channel.send ({
            embed: {
                color: '#FD1A2F',
                description: '**Error**! Player is Empty!'
            }
        })

        const disabledEmoji = client.emotes.error;
        const enabledEmoji = client.emotes.success;

        const filtersStatuses = [[], []];

        Object.keys(client.filters).forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(client.filters[filterName] + " : " + (client.player.getQueue(message).filters[filterName] ? enabledEmoji : disabledEmoji));
        });

        message.channel.send({
            embed: {
                color: 'ORANGE',
                footer: { text: 'Zapdos' },
                fields: [
                    { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `List of all filters enabled or disabled.\nUse \`${client.config.prefix}filter\` to add a filter to a song.`,
            },
        });
    },
};