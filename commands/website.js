function link(text, message) {
  const axios = require('axios')
  		var link = 'https://scriptableapi.shadowsniper784.repl.co/website';
  		var dummies = 'https://scriptable-for-dummies.vercel.app/docs/'
			axios.get(`${link}?q=${text}`).then(response => {
			  console.log(response.data)
			 message.channel.send(dummies + response.data.join('\n' + dummies) || 'No results found go to ' + dummies + ' to find what out what you can search!')
})}
module.exports = {
  callback: ({ message, args, text }) => {
    link(text.replace(/ /gi, '-'), message)
  }
}