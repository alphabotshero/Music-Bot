module.exports = {
    name: 'ping',
    aliases: ['Ping'],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send({
            embed: {
                color: '#A7DBFB',
                description: `:ping_pong: Pong. Latency is **${client.ws.ping}** ms!`,
            },
        });
    },
};