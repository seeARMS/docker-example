const express = require("express");
const app = express();
app.get("/", async (req, res, next) => {
  res.status(200).send("Hello World wow!");
});

app.listen(8080, () => console.log("Server is running on port 8080"));
