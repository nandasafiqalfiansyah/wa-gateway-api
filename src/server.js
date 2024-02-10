const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { Client, LocalAuth } = require("whatsapp-web.js");
const routers = require("./routers/routes");
const qrcode = require("qrcode-terminal");
const handleMessages = require("./handlers/messages.handler");

dotenv.config();
const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(bodyParser.json());

const client = new Client({
  authStrategy: new LocalAuth(),
  // proxyAuthentication: { username: 'username', password: 'password' },
  puppeteer: {
    // args: ['--proxy-server=proxy-server-that-requires-authentication.example.com'],
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

client.on("message", handleMessages(client));

routers.forEach(({ method, path, handler }) => {
  app[method.toLowerCase()](path, handler);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
