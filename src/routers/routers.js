const { client, eventEmitter } = require("../whatsappClient");
const path = require("path");
const fs = require("fs");

let svgString = "";

eventEmitter.on("qrCodeGenerated", (newSvgString) => {
  svgString = newSvgString;
});

const handleMessages = (message) => {
  if (message.body === "!ping") {
    message.reply("pong");
  }
};

const handleGetIndex = async (req, res) => {
  const htmlFilePath = path.join(__dirname, "../template", "index.html");
  let htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
  htmlContent = htmlContent.replace("{{svgString}}", svgString);
  res.send(htmlContent);
};

client.on("message", handleMessages);

module.exports = { handleMessages, handleGetIndex };
