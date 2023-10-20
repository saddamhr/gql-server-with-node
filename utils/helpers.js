const throwError = (error, operation) => {
  throw new Error(`Failed to ${operation} the books: ${error.message}`);
};

module.exports = {
  throwError,
};
