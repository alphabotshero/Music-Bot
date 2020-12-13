module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: '#DE8DF3',
            description: 'I have destroyed the player due to inactivity!'
        }
    })
};