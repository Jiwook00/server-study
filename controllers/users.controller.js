const { userService } = require("../services");
const { user } = require("../data.json");

module.exports = {
  patch: async (req, res) => {
    try {
      // const { user } = req;
      // console.log("user : ", user);
      const { name } = req.body;
      userService.patch(name);
      res.status(201).json(user);
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },
};
