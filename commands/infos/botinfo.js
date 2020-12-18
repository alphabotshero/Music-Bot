const { MessageEmbed } = require('discord.js')
const uptime = require ('./uptime')
const os = require('os')
module.exports = {
    name: 'botinfo',
    aliases: ['bi','stats'],
    category: 'Infos',
    utilisation: '{prefix}botinfo',

    execute(client, message) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        message.channel.send({
            
            embed: {
                color: '#2C2F33',
                author: { name: 'Bot stats' },
                thumbnail : `${client.user.displayAvatarURL}`,
                footer: `Created By: ${message.author.tag}`,
                fields: [
                    {name: 'Bot version', value: '`0.3`', inline: true},
                    {name: 'Node.js Version', value: '`v14.15.1`', inline: true},
                    {name: 'Discord.js Version', value: '`3.0.0`', inline: true},
                    { name: 'Total Guilds', value: `${client.guilds.cache.size}`, inline: true},
                    { name: 'Total Channels', value: `${client.channels.cache.size}`, inline: true },
                    { name: 'Total Users', value: `${client.users.cache.size}`, inline: true },
                    { name: 'Ping', value: `${Math.round(client.ws.ping)}ms`, inline: true },
                    {name: 'Memory Consumption',value: `Cores: ${os.cpus().length}`, inline: true},
                    {name: 'Bot Developers', value: '`krishna and Avi`', inline: true},
                    { name: 'Uptime', value: `${uptime}`, inline: true },
                ],
                                timestamp: new Date(),
            },
        });
    },
};
