const express = require("express");
const app = express();
app.get("/", async (req, res, next) => {
  res.status(200).send("Hi babe!! wow this is again, one more time, damn, again");
});

app.listen(8080, () => console.log("Server is running on port 8080"));
