const Book = require("./book");
const Review = require("./review");

// models/index.js
Book.hasMany(Review, { foreignKey: "bookId" });
Review.belongsTo(Book, { foreignKey: "bookId", onDelete: "CASCADE" });

module.exports = {
  Book,
  Review,
};
