const express = require("express");
// eslint-disable-next-line quotes, semi
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors());

const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (message) => {
  if (message.body === "!ping") {
    await message.reply("pong");
  }
});

client.initialize();

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
