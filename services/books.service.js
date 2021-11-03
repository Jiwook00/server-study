const { books, user } = require("../data.json");

const getAll = () => {
  return books;
};

const getOne = (id) => {
  const book = books.find((book) => book.id === id);
  if (!book) {
    return false;
  }
  return book;
};

module.exports = { getAll, getOne };
