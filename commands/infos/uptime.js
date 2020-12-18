const ms = require('ms');

module.exports = {
    name: 'uptime',
    aliases: ['up'],
    category: 'Infos',
    utilisation: '{prefix}uptime',

    execute(client, message) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
        message.channel.send ({
            embed: {
                color: '#5d9d81',
                description: `${uptime}` 
            }
        })
    },
};
    

