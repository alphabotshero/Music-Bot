module.exports = (client, message, playlist) => {
    message.channel.send({
        embed: {
            color: '#A7DBFB',
            description: `${playlist.title} has been added to the queue.`
        }
    })
};