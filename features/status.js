module.exports = (client, instance) => {
		console.log(Array.from(instance._commandHandler._commands).map(command => command[1]._names[0]))
		client.user
			.setPresence({
				activity: {
					name: `${client.config.bot.status.statusText}`,
					type: `${client.config.bot.status.statusType}`
				},
				status: 'idle'
			})
			.then(status => console.log())
			.catch(console.error);
};
