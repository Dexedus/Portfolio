import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
  });

app.get("/Projects", (req, res) => {
    res.render("projects.ejs")
  });

app.get("/About", (req, res) => {
    res.render("about.ejs")
  });

app.get("/ContactMe", (req, res) => {
    res.render("contact.ejs")
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  