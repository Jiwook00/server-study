const { books } = require("../data.json");

// 전체 책 리스트를 리턴
const getAll = () => {
  return books;
};

// id를 받아서 해당하는 책을 리턴
const getOne = (id) => {
  const book = books.find((book) => book.id === id);
  if (!book) {
    return false;
  }
  return book;
};

module.exports = { getAll, getOne };
