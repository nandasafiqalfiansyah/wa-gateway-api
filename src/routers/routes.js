const sendMessage = require("../handlers/message.multi");

const routers = [
  {
    method: `POST`,
    path: `/send-message`,
    handler: sendMessage,
  },
];

module.exports = routers;
