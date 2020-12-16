const ms = require('ms');

module.exports = {
    name: 'uptime',
    aliases: ['up'],
    category: 'Infos',
    utilisation: '{prefix}uptime',

    execute(client, message) {
        message.channel.send ({
            embed: {
                color: '#5d9d81',
                description: `Bot has been online since : **${ms(client.uptime)}**` 
            }
        })
    },
};
    

