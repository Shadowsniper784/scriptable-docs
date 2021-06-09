module.exports = client => {
	client.on('message', message => {
		const configMessages = client.config.logMessages;
		if (configMessages.status === true) {
			var log = configMessages.message;
			console.log(require('../replace')(log, message));
		}
		var i = 0;
		if (
			message.content.toLowerCase().includes('widget') &&
			!message.author.bot
		) {
			const axios = require('axios');
			let r = axios
				.get(`https://scriptableapi.shadowsniper784.repl.co/api?q=ListWidget`)
				.then(response => {
					//			i = require('../get')(response, message, i)
				});
		}
	});
};
