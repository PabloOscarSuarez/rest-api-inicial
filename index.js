const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
//controller
const { getAllUsers, postNewUser, deleteUser } = require("./controllers/user");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("no autorizad");
});

app.get("/users", getAllUsers);

app.post("/user", postNewUser);

app.put("/user/:id", (req, res) => {
  fs.readFile(__dirname + "/db/users.json", "utf8", (err, data) => {
    const users = JSON.parse(data);
    const userId = req.params.id;
    users[`user${userId}`] = req.body.name;
    res.status(201).send(users);
  });
});

app.delete("/user/:id", deleteUser);

const server = app.listen(4000, () => {
  console.log("mi servidor se levanto");
});
