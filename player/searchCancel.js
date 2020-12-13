module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#FA1D2F',
            description: 'Error! please provide a valid response.'
        }
    })
};