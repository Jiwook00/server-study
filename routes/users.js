const express = require("express");
const router = express.Router();

const { usersController } = require("../controllers");
const { checkToken } = require("../common/middlewares");

router.patch("/", checkToken, usersController.patch);

module.exports = router;
