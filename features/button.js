module.exports = (client) => 
client.on('clickButton', async (button) => {
  if (button.id === 'click_to_function') {
    button.channel.send(`${button.clicker.user.tag} clicked button!`);
  }
});