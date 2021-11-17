const users = require("../../db/users.json");

module.exports = (req, res, next) => {
  res.send(users);
};
