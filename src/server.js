const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const config = require("../config/config.json");
const bodyParser = require("body-parser");
const { Client, LocalAuth } = require("whatsapp-web.js");
const routers = require("./routers/routes");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
const colors = require("colors");
const handleMessages = require("./handlers/main.handler");
const moment = require("moment-timezone");

dotenv.config();
const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(bodyParser.json());

const client = new Client({
  restartOnAuthFail: true,
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
  authStrategy: new LocalAuth({ clientId: "client" }),
});

client.initialize();

client.on("qr", (qr) => {
  console.log(
    `[${moment().tz(config.timezone).format("HH:mm:ss")}] Scan the QR below : `
  );
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.clear();
  const consoleText = "config/console.txt";
  fs.readFile(consoleText, "utf-8", (err, data) => {
    if (err) {
      console.log(
        `[${moment()
          .tz(config.timezone)
          .format("HH:mm:ss")}] Console Text not found!`.yellow
      );
      console.log(
        `[${moment().tz(config.timezone).format("HH:mm:ss")}] ${
          config.name
        } is Already!`.green
      );
    } else {
      console.log(data.green);
      console.log(
        `[${moment().tz(config.timezone).format("HH:mm:ss")}] ${
          config.name
        } is Already!`.green
      );
    }
  });
});
client.on("message", handleMessages(client, config));

routers.forEach(({ method, path, handler }) => {
  app[method.toLowerCase()](path, handler);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
