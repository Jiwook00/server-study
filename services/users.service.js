const { user } = require("../data.json");
const patch = (name) => {
  user.name = name;
};

module.exports = { patch };
