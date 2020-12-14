module.exports = {
    name: 'serverlist',
    aliases: ['slist'],
    category: 'Owner',
    utilisation: '{prefix}serverlist'}

class ServersList extends Command {
	async run (message, args, data) {
        
		await message.delete();

		let i0 = 0;
		let i1 = 10;
		let page = 1;

		let description = 
        `${message.translate("common:SERVERS")}: ${this.client.guilds.cache.size}\n\n`+
		this.client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
			.map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} ${message.translate("common:MEMBERS").toLowerCase()}`)
			.slice(0, 10)
			.join("\n");

		const embed = new Discord.MessageEmbed()
			.setAuthor(message.author.tag, message.author.displayAvatarURL())
			.setColor(data.config.embed.color)
			.setFooter(this.client.user.username)
			.setTitle(`${message.translate("common:PAGE")}: ${page}/${Math.ceil(this.client.guilds.cache.size/10)}`)
			.setDescription(description);

		const msg = await message.channel.send(embed);
        
		await msg.react("⬅");
		await msg.react("➡");
		await msg.react("❌");

		const collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);

		collector.on("collect", async(reaction) => {

			if(reaction._emoji.name === "⬅") {

				i0 = i0-10;
				i1 = i1-10;
				page = page-1;
                
				if(i0 < 0){
					return msg.delete();
				}
				if(!i0 || !i1){
					return msg.delete();
				}
                
				description = `${message.translate("common:SERVERS")}: ${this.client.guilds.cache.size}\n\n`+
				this.client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
					.map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} ${message.translate("common:MEMBERS")}`)
					.slice(i0, i1)
					.join("\n");

				embed.setTitle(`${message.translate("common:PAGE")}: ${page}/${Math.round(this.client.guilds.cache.size/10)}`)
					.setDescription(description);
					
				msg.edit(embed);
            
			}

			if(reaction._emoji.name === "➡"){

				i0 = i0+10;
				i1 = i1+10;
				page = page+1;

				if(i1 > this.client.guilds.cache.size + 10){
					return msg.delete();
				}
				if(!i0 || !i1){
					return msg.delete();
				}

				description = `${message.translate("common:SERVERS")}: ${this.client.guilds.cache.size}\n\n`+
				this.client.guilds.cache.sort((a,b) => b.memberCount-a.memberCount).map((r) => r)
					.map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} ${message.translate("common:MEMBERS").toLowerCase()}`)
					.slice(i0, i1)
					.join("\n");

				embed.setTitle(`${message.translate("common:PAGE")}: ${page}/${Math.round(this.client.guilds.cache.size/10)}`)
					.setDescription(description);
            
				msg.edit(embed);

			}

			if(reaction._emoji.name === "❌"){
				return msg.delete(); 
			}

			await reaction.users.remove(message.author.id);

		});
	}

}

module.exports = ServersList;
