const { v4 } = require('uuid');
const Book = require('./../models/bookModel.js');
const { throwError } = require('./../utils/helpers.js');

const getBooks = async (parent) => {
  try {
    const books = await Book.find();

    const gqlResponse = {
      isSuccess: true,
      books,
    };

    return gqlResponse;
  } catch (error) {
    throwError(error, 'fetch');
  }
};

const getBook = async (parent, { id }) => {
  try {
    const book = await Book.findById(id);

    const gqlResponse = {
      isSuccess: true,
      book,
    };

    return gqlResponse;
  } catch (error) {
    throwError(error, 'fetch');
  }
};

const createBook = async (parent, { title, author }) => {
  try {
    const id = v4();

    const newBook = new Book({ _id: id, title, author });

    await newBook.save();

    const gqlResponse = {
      isSuccess: true,
      message: 'Book created successfully',
      book: newBook,
    };

    return gqlResponse;
  } catch (error) {
    throwError(error, 'create');
  }
};

const updateBook = async (parent, { id, title, author }) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author },
      { new: true }
    );

    const gqlResponse = {
      isSuccess: true,
      message: 'Book updated successfully',
      book: updatedBook,
    };

    return gqlResponse;
  } catch (error) {
    throwError(error, 'update');
  }
};

const deleteBook = async (parent, { id }) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(id);

    const gqlResponse = {
      isSuccess: true,
      message: 'Book successfully deleted',
      book: deleteBook,
    };
    return gqlResponse;
  } catch (error) {
    throwError(error, 'delete');
  }
};

module.exports = {
  createBook,
  updateBook,
  deleteBook,
  getBooks,
  getBook,
};
