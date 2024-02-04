const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { handleGetIndex } = require("./routers/routers");
const { client } = require("./whatsappClient");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.get("/", handleGetIndex);

client.initialize();

app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}`);
});
