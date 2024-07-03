const express = require("express");
const dayjs = require("dayjs");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`It's ${dayjs()}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
