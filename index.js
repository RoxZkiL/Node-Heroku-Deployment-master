const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Prueba tecnica realizada por Jesus Matute");
});

app.get("/iecho", (req, res) => {
  try {
    const { text } = req.query;
    if (text) {
      const reversedString = text.split("").reverse().join("");
      if (text === reversedString) {
        res.status(200).send({ text: reversedString, palindrome: true });
      } else {
        res.status(200).send({ text: reversedString });
      }
    } else {
      res.status(400).send({ error: "no text" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || 5000);
