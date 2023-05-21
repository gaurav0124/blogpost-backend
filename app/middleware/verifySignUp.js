const db = require("../models");

const User = db.users;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username check
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then(user => {
    if (user) {
      res.status(200).send({
        message: "Sorry! Username is already in use!",
        error: true,
      });
      return;
    }
    next();
  });
};

module.exports = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};
