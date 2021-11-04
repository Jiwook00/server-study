const { user } = require("../data.json");

// name을 받아서 기존 유저의 name을 수정
const patch = (name) => {
  user.name = name;
};

module.exports = { patch };
