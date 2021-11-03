const { user } = require("../data.json");

module.exports = {
  checkToken: async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (token) {
        if (user.token === token) {
          req.user = user;
          next();
        } else {
          res.sendStatus(403);
        }
      } else {
        res.sendStatus(401);
      }
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },
};
