const { bookService } = require("../services");

module.exports = {
  getAll: async (req, res) => {
    try {
      /**
       * 모든 책을 리턴하는 api 입니다.
       * bookService에서 로직을 가저와서 사용하세요.
       */
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },

  getOne: async (req, res) => {
    try {
      /**
       * book id를 받아서 해당하는 책을 조회하는 api 입니다.
       */
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },
};
