module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: '#DE8DF3',
            description: 'Player has been paused due to inactivity',
        }
    })
};