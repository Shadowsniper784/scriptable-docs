var instance = {
	defaultPrefix: '?',
	logMessages: {
		status: true,
		message: 'Message: {CHANNEL} {USER#}: {CONTENT}'
	},
	bot: {
		status: {
			statusType: 'WATCHING',
			statusText: '4 commands!'
		},
		partials: ['MESSAGE', 'REACTION'],
		token: process.env.TOKEN
	},
	webpages: {
		port: 3000,
		home: true
	},
	defaultDocsAmount: 2,
	defaultWebAmount: 2
};
require('pretty-error').start();

const DiscordJS = require('discord.js');
const WOKCommands = require('wokcommands');

const client = new DiscordJS.Client({
	// Use recommended partials for the built-in help menu
	partials: instance.bot.partials
});
client.config = instance;
client.on('ready', () => {
	// The client object is required as the first argument.
	// The second argument is the options object.
	// All properties of this object are optional.

	new WOKCommands(client, {
		// The name of the local folder for your command files
		commandsDir: 'commands',

		// The name of the local folder for your feature files
		featuresDir: 'features',

		// The name of the local file for your message text and translations
		// Omitting this will use the built-in message path
		messagesPath: '',

		// If WOKCommands warning should be shown or not, default true
		showWarns: true,

		// How many seconds to keep error messages before deleting them
		// -1 means do not delete, defaults to -1
		del: -1,

		// What language your bot should use
		// Must be supported in your messages.json file
		defaultLangauge: 'english',

		// If your commands should not be ran by a bot, default false
		ignoreBots: true,

		// Various options for your MongoDB database connection
		dbOptions: {
			// These 4 are the default options
			keepAlive: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		},

		// What server/guild IDs are used for testing only commands & features
		// Can be a single string if there is only 1 ID
		testServers: ['ID1', 'ID2', 'ID3'],

		// What built-in commands should be disabled.
		// Note that you can overwrite a command as well by using
		// the same name as the command file name.
		disabledDefaultCommands: [
			// 'help',
			// 'command',
			// 'language',
			// 'prefix',
			// 'requiredrole'
		]
	})
		// Here are some additional methods that you can chain
		// onto the contrustor call. These will eventually be
		// merged into the above object, but for now you can
		// use them:

		// The default is !
		.setDefaultPrefix(instance.defaultPrefix)

		// Used for the color of embeds sent by WOKCommands
		.setColor(0xff0000);

	// When connecting to a Mongo database.
	// For more infomration view the "DATABASES" section
	// of this documentation.
});

client.login(instance.bot.token);
const express = require('express');
const app = express();
const webpages = instance.webpages;
const { home, port } = webpages;
if (home) app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
