const express = require("express");
const app = express();
const port = 1050;

app.get("/", (req, res) => res.send("Hello Moon!"));
app.listen(port, () =>
  console.log(`Moon is running at http://localhost:${port}`)
);
