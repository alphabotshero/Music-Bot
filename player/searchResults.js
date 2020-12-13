module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#A7DBFB',
            author: { name: `Results for ${query}` },
            footer: { text: 'made by krishna#1111' },
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};