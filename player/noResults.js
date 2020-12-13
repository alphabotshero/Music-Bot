module.exports = (client, message, query) => {
    message.channel.send({
        embed: {
            color: '#DE8DF3',
            description: `No match found on youtube for ${query}`

        }
    })
};