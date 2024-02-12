const sendMessage = require("../handlers/sendMessage.handler");

const routers = [
  {
    method: `get`,
    path: `/`,
    handler: sendMessage,
  },
];

module.exports = routers;
