module.exports = {
    name: 'pause',
    aliases: ['ps'],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel)
            return message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: 'you should be in a voice channel to use this command.'
                }
            })

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
            return message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: 'Error! we are not in same voice channel.'
                }
            })

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: 'There are no tracks in the **Queue**'
            }
        })

        if (client.player.getQueue(message).paused) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: 'The player is already **paused**'
            }
        })

        client.player.pause(message);
        message.channel.send({
            embed: {
                color: '#A7DBFB',
                description: `The player has been **paused** `
            },
        });
    }
};