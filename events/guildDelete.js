module.exports = (client, guild) => {
    client.channels.cache.get('787708430760542250').send
    (`Left a server:(
    Server name : ${guild.name}
    Server ID : ${guild.id}
    Serveur owner ${guild.ownerID}
    Server membercount : ${guild.memberCount}`);
};