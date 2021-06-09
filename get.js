module.exports = (response, message, limit) => {
  var i = limit
  console.log('%o response', response)
  var bool
	response.filter(item => {
	  const { MessageEmbed } = require('discord.js');
	  bool = item.shortName ? true : false
		const embed = new MessageEmbed()
			.setTitle(item.shortName)
			.setURL(item.url)
			.setDescription(
				item.description.replace(/<code>/gi, '`').replace(/<\/code>/gi, '`')
			)
			.setColor('#00ff00');
		item.detailsSections.filter(it => {
			it.details.filter(i => {
				embed.addField(i.shortName, i.decleration, true);
			});
		});
			message.channel.send(bool ? embed : 'No results found!');

	})
	return i
};
