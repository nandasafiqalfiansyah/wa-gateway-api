const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { routers } = require("./routers/routes");
const handleMessages = require("./handlers/messages.handler");
const customMessages = require("./Messages/messages");

const app = express();
dotenv.config();
const port = process.env.APP_PORT;

app.use(cors());
app.use(bodyParser.json());

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: false,
  },
});

client.initialize();

client.on("loading_screen", (percent, message) => {
  console.log("LOADING SCREEN", percent, message);
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
});

client.on("auth_failure", (msg) => {
  console.error("AUTHENTICATION FAILURE", msg);
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", handleMessages(customMessages));

routers.forEach(({ method, path, handler }) => {
  app[method.toLowerCase()](path, handler);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
