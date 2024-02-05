const handleMessages = (customMessages) => (message) => {
  const { command, response } = customMessages.find(
    (custom) => message.body === custom.command
  );
  if (command && response) {
    message.reply(response);
  }
};

module.exports = handleMessages;
