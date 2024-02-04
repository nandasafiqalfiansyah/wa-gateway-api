const { Client } = require("whatsapp-web.js");
const QRCode = require("qrcode-svg");
const EventEmitter = require("events");

const client = new Client();
const eventEmitter = new EventEmitter();

let svgString = "";

client.on("qr", (qr) => {
  const qrCodeSvg = new QRCode(qr, { type: "svg", size: 10 });
  svgString = qrCodeSvg.svg();
  // Emit a custom event with the svgString
  eventEmitter.emit("qrCodeGenerated", svgString);
});

client.on("ready", () => {
  console.log("Client is ready!");
});

module.exports = { client, eventEmitter };
