const {
  createBook,
  updateBook,
  deleteBook,
  getBooks,
  getBook,
} = require('../resolvers/bookResolvers.js');

const resolvers = {
  Query: {
    getBooks,
    getBook,
  },
  Mutation: {
    createBook,
    updateBook,
    deleteBook,
  },
};

module.exports = resolvers;
