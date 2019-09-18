const express = require("express");
const { main } = require("./local_modules/app");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3002;

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/weather", async (req, res) => {
  let weather = await main(req.query.location);

  res.send(weather);
});

app.listen(port, () => {
  console.log(`listeing on port ${port}`);
});
