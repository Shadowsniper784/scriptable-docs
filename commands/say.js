module.exports = {
  category: 'Help',
  description: 'hi',
  minArgs: 1,
  callback: ({ message, args, text }) => {
    message.channel.send(text)
  }
}