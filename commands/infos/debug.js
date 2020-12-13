module.exports = {
    name: 'debug',
    aliases: ['db'],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send({
            embed: {
                color: '#A7DBFB',
                description: `Connected in **__${client.voice.connections.size}__** voice channels !`,
            },
        });
    },
};