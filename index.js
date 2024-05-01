const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Arifs phone info comming soon toon");
});

app.listen(port, () => {
  console.log(`my phone server is running on port ${port}`);
});
