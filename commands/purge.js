module.exports = {
  callback: ({ message, args }) => {
    message.channel.bulkDelete(args[0])
  }
}