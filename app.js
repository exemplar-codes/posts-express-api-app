const express = require("express");
const { connect, get } = require("./utils/database");

const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("Server is running fine");
});

app.use((req, res) => {
  res.send("404");
});

connect()
  .then(() => {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Backend server started on port ${PORT}`);
    });
  })
  .catch((error) => console.log("Server start failed!", { error }));
