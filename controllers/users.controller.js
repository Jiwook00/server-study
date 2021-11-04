const { userService } = require("../services");
const { user } = require("../data.json");

module.exports = {
  patch: async (req, res) => {
    try {
      /**
       * 유저의 이름을 수정하는 api 입니다.
       * body로 name을 받아서 수정합니다.
       */
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },
};
