const express = require("express");
const { connect, get } = require("./utils/database");
const postsRouter = require("./routes/posts");

const app = express();

// set up input middlewares
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).send("Server is running fine");
});

app.use("/posts", postsRouter);

// Error sink
app.get("/error-check", (req, res, next) => {
  throw new Error("error-check");
  // res.status(200).send("Server is running fine");
});
app.get("/error-check-async", (req, res, next) => {
  fetch("")
    .then(() => {})
    .catch((err) => next(err));
});
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err || err.message || "500 error");

  console.log(res.statusCode, { err });
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
