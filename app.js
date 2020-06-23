const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

const todos = [];
const workTodos = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.listen(3000, function () {
	console.log("Server running on port 3000.");
});

app.get("/", function (req, res) {
    const currentDate = date.getDate();
    // console.log(date.getDay());
	res.render("list", { listTitle: currentDate, todos: todos, });
});

app.post("/", function (req, res) {
	todos.push(req.body.todo);
	res.redirect("/");
});

app.get("/work", function (req, res) {
    const listTitle = "Work"
    res.render("list", { listTitle: listTitle, todos: workTodos})
})

app.post("/work", function (req, res) {
    workTodos.push(req.body.todo)
    res.redirect("/work")
})
