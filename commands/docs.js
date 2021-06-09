const { MessageEmbed } = require('discord.js');
const Api = require('../file');
const api = new Api();

function broad() {}
function specific(text, message, amount) {
	var i = 0;
	var split = text.split('.');
	const response = api.getDocs(split[0], amount);
	response.filter(item => {
		const embed = new MessageEmbed().setColor('#00ff00');
		item.detailsSections.filter(detailsSection => {
			detailsSection.details.filter(detail => {
				if (detail.shortName.toLowerCase().includes(split[1].toLowerCase())) {
					embed.setTitle(detail.longName);
					embed.setAuthor(`Instance of ${item.shortName}`)
					embed.setURL(detail.url);
					embed.setDescription(
						detail.summary

					);
					embed.addField('**Description**', detail.description.replace(/<code>/gi, '`').replace(/<\/code>/gi, '`'));
					embed.addField('**Decleration**', `\`${detail.decleration}\``);
				}
			});
		});
		if (i < 3) {
			message.channel.send(embed);
			i += 1;
		} else return;
	});
}

module.exports = {
	minArgs: 1,
	expectedArgs: '<thing to search>',
	callback: ({ message, args, text, client }) => {
		const amount = args[1] || client.config.defaultDocsAmount;
		var i = 0;
		if (text.includes('.')) {
			specific(text, message, amount);
		} else {
			let r = api.getDocs(args[0], amount);
			//console.log(response)
			i = require('../get')(r, message, i);
		}
	}
};
