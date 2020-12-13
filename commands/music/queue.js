module.exports = {
  name: 'queue',
  aliases: ['q'],
  category: 'Music',
  utilisation: '{prefix}queue',

  execute(client, message) {
    if (!message.member.voice.channel) return message.channel.send ({
      embed: {
        color: '#FA1D2F',
        description: 'you must be in a voice channel to use this command.'
      }
    })

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send({
      embed: {
        color: '#FA1D2F',
        description: 'No tracks are being played in the player.'
      }
    })

    message.channel.send({
      embed: {
        color: '#DE8DF3',
        author: { name: `${message.guild.name}` },
        description: `${queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requested by : <@${track.requestedBy.id}>)`).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs` : `Queue size - **${queue.tracks.length} Track(s)**`}`}`,
      },
    });
  },
};