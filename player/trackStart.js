module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: '#A7DBFB',
            title: 'Now Playing',
            description: `(${track.title}) in **${message.member.voice.channel.name}** Voice channel [<@${track.requestedBy.id}>]`
        },
    });
};