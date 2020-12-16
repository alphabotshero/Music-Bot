const Discord = require('discord.js')
const array = [ "683343114865606686", "783559957147549716" ,"674648258391441421" ,"326759637405925376"]
module.exports = {
	info: {
	  name: "evaluvate",
	  description: "eval code",
	  usage: "[code]",
	  aliases: ["evsl"],
	},
  
	run: async function (client, message, args) {
	let command = args.slice(0).join(" ")
	if (command.includes(`SECRET`) || command.includes(`TOKEN`) || command.includes(`token`) || command.includes("process.env")) {
		return message.channel.send('U Aint getting my token') 
	  } else{
	if(array.includes(message.author.id)){
	if(!command) return message.channel.send("...")

	try{
		let evaled = eval(command)
		if(message.author.id === '674648258391441421'){
		var embed = new Discord.MessageEmbed()
		.setTitle("Evaluated")
		.addField("To Eval", `\`\`\`${command}\`\`\``)
		.addField("Evaled", `\`\`\`js\n${evaled}\`\`\``)  
		.addField("Type Of", `\`\`\`${typeof(evaled)}\`\`\``)
		message.channel.send(embed)
		}else {
			message.channel.send(`\`\`\`js\n${evaled}\`\`\``)
		} 
	} catch  (error) {
		var embed = new Discord.MessageEmbed()
		.setTitle("Error")
		.addField("Error", `${error}`)

		message.channel.send(embed)
	}
 } else {
	message.channel.send("You do not have permission to use this command")
 }
}
	}
	}