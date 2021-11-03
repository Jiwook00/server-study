const express = require("express");
const router = express.Router();

const { booksController } = require("../controllers");

router.get("/", booksController.getAll);
router.get("/:id", booksController.getOne);

module.exports = router;
