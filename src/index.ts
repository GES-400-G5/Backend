import express from "express";
import logger from "morgan";

const app = express();

app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
