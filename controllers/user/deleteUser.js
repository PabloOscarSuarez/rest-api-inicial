const users = require("../../db/users.json");

module.exports = (req, res, next) => {
  const userId = req.params.id;
  const copyUsers = users;
  delete copyUsers[`user${userId}`];
  res.status(200).send(copyUsers);
};
