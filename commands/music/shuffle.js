module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: 'you must be in voice channel to use this command.'
            }
        })

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
            embed: {
                color: '#ff0000',
                description: 'Oh-oh! we are not in a same voice channel.'
            }
        })

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: '',
                description: '**Error**! Player is Empty.'
            }
        })

        client.player.shuffle(message);

        return message.channel.send({
            embed: {
                color: '#DE8DF3',
                description: `${client.player.getQueue(message).tracks.length} tracks are being shuffled**`,
            },
        });
    },
};