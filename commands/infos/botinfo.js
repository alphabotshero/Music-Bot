const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: 'botinfo',
    aliases: ['bi','stats'],
    category: 'Infos',
    utilisation: '{prefix}botinfo',

    execute(client, message) {

        message.channel.send({
            embed: {
                color: '#2C2F33',
                author: 'Bot Stats',
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
                    {name: 'Bot Developers', value: '`Team Destiny`', inline: true},
                    { name: 'Joined Date', value: client.user.createdAt , inline: true },
                ],
                thumbnail: 'https://cdn.discordapp.com/avatars/777772300517900288/2711cbc1aa69a174fbc0ca2da1a5e983.png?size=1024',
                timestamp: new Date(),
            },
        });
    },
};