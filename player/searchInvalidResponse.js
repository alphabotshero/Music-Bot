module.exports = (client, message, query, tracks, content, collector) => {
    message.channel.send({
        embed: {
            color: 'FA1D2F',
            description: `Oh-oh! you must enter a number between **1** and **${tracks.length}**.`
        }
    })
};