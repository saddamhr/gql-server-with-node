
# GraphQL Server with Node.js

This is a simple GraphQL server built using Node.js and MongoDB.

## Features

- Create, Read, Update, and Delete (CRUD) operations for Books.
- GraphQL API to interact with the server.
- MongoDB database for data storage.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed and running.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/saddamhr/gql-server-with-node.git
   cd gql-server-with-node
   ```


2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Configure MongoDB connection:

   - Open `./database/db.js` and replace the connection string with your MongoDB server details.

4. Start the server:

   ```bash
   npm start
   ```

5. Your GraphQL server should now be running at `http://localhost:4000` (or as configured in `./index.js`).

### Usage

You can access the GraphQL playground by visiting `http://localhost:4000` in your browser. Here are some example queries/mutations:

#### Get all books

```graphql
query {
  getBooks {
    isSuccess
    books {
      id
      title
      author
    }
  }
}
```

#### Get book by id

```graphql
query {
  getBook(id:"book-id") {
    isSuccess
    book {
      id
      title
      author
    }
  }
}
```



#### Create a new book

```graphql
mutation {
  createBook(title: "Sample Book Title", author: "Sample Author") {
    isSuccess
    message
    book {
      id
      title
      author
    }
  }
}
```

#### Update a book

```graphql
mutation {
  updateBook(id: "book-id", title: "Updated Title", author: "Updated Author") {
    isSuccess
    message
    book {
      id
      title
      author
    }
  }
}
```

#### Delete a book

```graphql
mutation {
  deleteBook(id: "book-id") {
    isSuccess
    message
    book {
      id
      title
      author
    }
  }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/introduction/)
- [GraphQL](https://graphql.org/)

```

Make sure to replace placeholders like `your-username`, `your-graphql-server`, and `book-id` with actual values relevant to your project. You can expand the README with more details about your project as needed.
```
