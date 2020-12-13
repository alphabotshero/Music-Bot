module.exports = {
    name: 'stop',
    aliases: ['st'],
    category: 'Music',
    utilisation: '{prefix}stop',

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
                description: 'Oh-oh! we are not in same voice channel.'
            }
        })

        if (!client.player.getQueue(message)) return message.channel.send ({
            embed: {
                color: '#FA1D2F',
                description: '**Error**! Player is Empty.'
            }
        })

        client.player.setRepeatMode(message, false);
        client.player.stop(message);

        message.channel.send({
            embed: {
                color: '#A7DBFB',
                description: `Stopped playing and left the voice channel.`
            },
        });
    }
};