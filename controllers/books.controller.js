const { bookService } = require("../services");

module.exports = {
  getAll: async (req, res) => {
    try {
      const books = bookService.getAll();
      if (books) {
        res.status(200).json(books);
      } else {
        res.sendStatus(404);
      }
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },

  getOne: async (req, res) => {
    try {
      const book = bookService.getOne(parseInt(req.params.id));
      if (book) {
        res.status(200).json(book);
      } else {
        res.sendStatus(404);
      }
    } catch (e) {
      console.log("err : ", e);
      res.sendStatus(500);
    }
  },
};
