module.exports = {
    name: 'leave',
    aliases: ['l', 'dc','disconnect', 'dc'],
    category: 'Music',
    utilisation: '{prefix}join',

    execute(client, message, args) {
        
     message.member.voice.channel.leave();

        message.channel.send ({
            embed: {
                color: '#DE8DF3',
                description: `Left **${message.member.voice.channel.name}** channel. use **>join** to summon again.`
            }
        })
    },
};