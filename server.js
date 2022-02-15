const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || "8080";

const dirname = "dist/games-app";

app.use(express.static(path.resolve(`${dirname}`)));

app.use((req, res) => res.sendFile(path.resolve(`${dirname}/index.html`)));

app.listen(port, (e, b) => {
  console.log(`Server has started on port ${port}`)
});
