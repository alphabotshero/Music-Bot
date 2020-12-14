module.exports = {
    name: 'evaluate',
    aliases: ['eval'],
    category: 'Owner',
    utilisation: '{prefix}eval'}

class Eval extends Command {

	async run (message, args, data) {

		const usersData = 674648258391441421;
		
		const guildsData = 776125680194289725;
        
		const content = message.content.split(" ").slice(1).join(" ");
		const result = new Promise((resolve) => resolve(eval(content)));
        
		return result.then((output) => {
			if(typeof output !== "string"){
				output = require("util").inspect(output, { depth: 0 });
			}
			if(output.includes(this.client.token)){
				output = output.replace(this.client.token, "T0K3N");
			}
			message.channel.send(output, {
				code: "js"
			});
		}).catch((err) => {
			err = err.toString();
			if(err.includes(this.client.token)){
				err = err.replace(this.client.token, "T0K3N");
			}
			message.channel.send(err, {
				code: "js"
			});
		});

	}

}

module.exports = Eval;