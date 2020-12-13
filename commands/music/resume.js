module.exports = {
    name: 'resume',
    aliases: ['rs'],
    category: 'Music',
    utilisation: '{prefix}resume',

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
                description: 'Oh-oh! we are not in same voice channel.'
            }
        })

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: 'Error**! Player is Empty.'
            }
        })

        if (!client.player.getQueue(message).paused) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: 'The player is not **paused**'
            }
        })

        client.player.resume(message);

        message.channel.send({
            embed: {
                color: '#DE8DF3',
                description: `Resuming the player.`
            },
        });
    }
};