module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel)
            return message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: `You have to be connected to a voice channel before you can use this command.`,
                },
            });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
            return message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: `Iam already being used in another channel.`,
                },
            });

        if (!client.player.getQueue(message))
            return message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: `There is nothing to play.`,
                },
            });

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
            if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
        });

        message.channel.send({
            embed: {
                color: '#A7DBFB',
                author: { name: track.title },
                footer: { text: 'Zapdos' },
                fields: [
                    { name: 'Channel', value: track.author, inline: true },
                    { name: 'Requested by', value: track.requestedBy.username, inline: true },
                    { name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Duration', value: track.duration, inline: true },
                    { name: 'Filters activated', value: filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Repeat mode', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Track Url', value: track.url, inline: false },

                    { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail }
            },
        });
    },
};