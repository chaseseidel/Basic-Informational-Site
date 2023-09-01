import express from "express";
import { readFile } from "fs/promises";
const app = express();
const port = 8080;

app.get("/", async (req, res) => {
  res.send(await readFile("./index.html", "utf8"));
});

app.get("/about", async (req, res) => {
  res.send(await readFile("./about.html", "utf8"));
});

app.get("/contact", async (req, res) => {
  res.send(await readFile("./contact-me.html", "utf8"));
});

app.use(async (req, res) => {
  res.status(404).send(await readFile("./404.html", "utf8"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
