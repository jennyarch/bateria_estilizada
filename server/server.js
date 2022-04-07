const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send('<span>Olá Mundo!</span>')
});
const PORT = process.env.PORT || 5000;
app.listem(PORT, () => {
  console.log("Listening on port " + PORT);
})