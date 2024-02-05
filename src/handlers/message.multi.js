const sendMessage = (client, req, res) => {
  const { number, message } = req.body;
  console.log({ number, message });
  client
    .getNumberId(number)
    .then((contact) => {
      let formattedNumber = contact._serialized;
      client
        .sendMessage(formattedNumber, message)
        .then((response) => {
          let messageId = response.id._serialized;
          res.send({
            success: true,
            message: "Message sent successfully",
            data: {
              messageId,
            },
          });
        })
        .catch((err) => {
          res.status(500).send({
            success: false,
            message: "Failed to send message",
            error: err.toString(),
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: "Failed to find contact",
        error: err.toString(),
      });
    });
};

module.exports = sendMessage;
