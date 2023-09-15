console.log("App ran");
const fs = require("fs/promises");

setInterval(async () => {
  const message = new Date().toLocaleTimeString().replaceAll(" ", "-");
  fs.writeFile(`${message}.txt`, "I am on " + message, (err) =>
    console.log(err)
  );
}, 100);
