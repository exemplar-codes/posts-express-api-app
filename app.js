const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("Server is running fine");
});

app.use((req, res) => {
  res.send("404");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Backend server started on port ${PORT}`);
});
