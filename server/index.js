const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.listen(8080, () => {
  console.log(`Listening on port 8080`);
});
