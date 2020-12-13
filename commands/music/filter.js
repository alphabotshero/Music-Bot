module.exports = {
    name: 'filter',
    aliases: ['fil'],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: `you must be in a voice channel to use this command`,
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: `Oh-oh! we are not in same voice channel`,
            },
        });

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: 'There are no Tracks in the Queue ;-;'
            }
        })

        if (!args[0]) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: 'Please select a valid filter to **__Enable__** or **__Disable__**'
            }
        })

        const filterToUpdate = Object.values(client.filters).find((f) => f.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: '**Error!** The filter doesnt even exist.'
            }
        })

        const filterRealName = Object.keys(client.filters).find((f) => client.filters[f] === filterToUpdate);

        const queueFilters = client.player.getQueue(message).filters;
        const filtersUpdated = {};
        filtersUpdated[filterRealName] = queueFilters[filterRealName] ? false : true;
        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterRealName]) message.channel.send({
            embed: {
                color: '#DE8DF3',
                description: `I have **__Enabled the filter__** it takes a moment to adjust the player`,
            },
        });

        else message.channel.send({
            embed: {
                color: '#DE8DF3',
                description: `I have **__Disabled the filter__** it takes a moment to adjust the player`,
            },
        });
    },
};