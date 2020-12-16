const Discord = require('discord.js')
const array = [ "683343114865606686", "783559957147549716" ,"674648258391441421" ,"326759637405925376"]
module.exports = {
    info: {
      name: "serverlist",
      description: "svl",
      usage: "",
      aliases: ["svl"],
    },
  
    run: async function (client, message, args) {
        if(array.includes(message.author.id)){
            let reply = ""
            client.guilds.cache.forEach((guild) => {
                reply += `\`\`\`\nGuild Name = ${guild.name}, Guild members = ${guild.members.cache.size}\`\`\`` })
                const embed = new Discord.MessageEmbed()
                embed.setDescription(reply)
                message.channel.send(embed)
            }
    else{message.reply('NO!')}
    }
}