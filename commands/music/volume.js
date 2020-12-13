module.exports = {
    name: 'volume',
    aliases: ['vol'],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel)
            return message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: `**you must be in a voice channel to use this command!**`,
                },
            });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id)
            return message.channel.send({
                embed: {
                    color: '#FA1D2F',
                    description: `**you must be in a voice channel to use this command!**`,
                },
            });

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: `**The __Queue__ is Empty** ;-;`
            }
        })

        if (!args[0] || isNaN(args[0])) return message.channel.send(`${client.emotes.error} - Please enter a valid number !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 200) return message.channel.send(`${client.emotes.error} - Please enter a valid number (between 1 and 100) !`);

        message.channel.send({
            embed: {
                color: '#DE8DF3',
                description: (`The volume has been changed from **${client.player.getQueue(message).volume}%** to **${parseInt(args[0])}%** !`),
            }
        })

        client.player.setVolume(message, args[0]);
    },
};