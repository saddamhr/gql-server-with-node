const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/typedefs.js');
const resolvers = require('./schema/resolvers.js');

require('./database/db.js');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
