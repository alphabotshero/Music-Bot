module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: 'you must be in a voice channel to use this command.'
            }
        })

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: 'you must be in a voice channel to use this command.'
            }
        })

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: '**Error**! the player is Empty'
            }
        })

        client.player.skip(message);

        message.channel.send({
            embed: {
                color: '#DE8DF3',
                description: `Skipping the current song.`,
            },
        });
    },
};