const fs = require("fs");
const sendMessage = (req, res) => {
  var parents = fs.readFileSync("parents.json");
  parents = JSON.parse(parents);

  res.send(parents);
};

module.exports = sendMessage;
