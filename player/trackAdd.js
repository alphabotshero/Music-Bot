module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: '#A7DBFB',
            description: `${track.title} has been added to the queue.`
        }
    })
};