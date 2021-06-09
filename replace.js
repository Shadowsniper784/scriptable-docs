module.exports = (text, message) => {
	var log = text;
	log = log.replace(/{CONTENT}/gi, message.content);
	log = log.replace(/{CHANNEL}/gi, message.channel.name);
	log = log.replace(/{GUILD}/gi, message.guild.name);
	log = log.replace(/{AUTHOR}/gi, message.author.username);
	log = log.replace(/{AUTHOR#}/gi, message.author.tag);
	log = log.replace(/{AUTHORID}/gi, message.author.id);
	log = log.replace(/{USER}/gi, message.author.username);
	log = log.replace(/{USER#}/gi, message.author.tag);
	log = log.replace(/{USERID}/gi, message.author.id);
	return log;
};
