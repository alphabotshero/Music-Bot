module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: `You have to be connected to a voice channel before you can use this command.`,
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send ({
            embed: {
                color: '#FA1D2F',
                description: 'Oh-oh! we are not in same voice channel'
            }
        })

        if (!args[0]) return message.channel.send({
            embed: {
                color: '#FA1D2F',
                description: `The **__queue__** is empty.`,
            },
        });

        client.player.play(message, args.join(" "));
    },
};