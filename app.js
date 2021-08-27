const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

let todoList = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", { day, todoList });
});

app.post("/", (req, res) => {
  let todo = req.body.todoList;
  todoList.push(todo);
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("App started");
});
