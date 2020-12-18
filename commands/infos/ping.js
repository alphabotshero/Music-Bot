module.exports = {
    name: 'ping',
    aliases: ['Ping'],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send({
            embed: {
                color: '#A7DBFB',
                description: `<a:pandaping:788652556732596224> Pong. Latency is **${client.ws.ping}** ms!`,
            },
        });
    },
};
