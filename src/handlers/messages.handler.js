const handleMessages = (client) => (msg) => {
  console.log("MESSAGE RECEIVED", msg.body);
  if (msg.body === "!ping reply") {
    // Send a new message as a reply to the current one
    msg.reply("pong");
  } else if (msg.body === "!ping") {
    // Send a new message to the same chat
    client.sendMessage(msg.from, "pong");
  }
};

module.exports = handleMessages;
