module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: '#A7DBFB',
            description: 'Player has been crashed as there were no tracks to play ;-;'
        }
    })
};