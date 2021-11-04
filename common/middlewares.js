const { user } = require("../data.json");

module.exports = {
  checkToken: async (req, res, next) => {
    try {
      /**
       * 토큰 인증을 하는 미들웨어를 작성 하세요
       * 헤더로 토큰을 받습니다.
       * 테스트 데이터인 user의 토큰과 헤더로 들어온 토큰을 확인합니다.
       */
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },
};
