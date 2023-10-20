const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    author: String
  }

  type GetBooksResponse {
    isSuccess: Boolean
    books: [Book]
  }

  type GetBookResponse {
    isSuccess: Boolean
    book: Book
  }

  type CreateBookResponse {
    isSuccess: Boolean!
    message: String
    book: Book
  }

  type Query {
    getBooks: GetBooksResponse
    getBook(id: ID!): GetBookResponse
  }

  type Mutation {
    createBook(title: String!, author: String!): CreateBookResponse
    updateBook(id: ID!, title: String, author: String): CreateBookResponse
    deleteBook(id: ID!): CreateBookResponse
  }
`;

module.exports = typeDefs;
