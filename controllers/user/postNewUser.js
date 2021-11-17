const users = require("../../db/users.json");

module.exports = (req, res, next) => {
  const userId = req.body.id;
  const copyUsers = users;
  copyUsers[`user${userId}`] = req.body;
  res.status(201).send(copyUsers);
};
