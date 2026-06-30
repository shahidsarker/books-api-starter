// seed.js — populates Books and Reviews with sample data, then exits.
// Run with: node seed.js
//
// Requires Parts 1 & 2 from Workshop I (db connection + Book model) AND
// Parts 1 & 2 from Workshop II (Review model + association) to be complete.
// Importing from ./models runs models/index.js, which wires the association
// before db.sync — that order matters.

const db = require("./db");
const { Book, Review } = require("./models");

const books = [
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    genre: "Tech",
    publishedYear: 1999,
    available: true,
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    publishedYear: 2018,
    available: true,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    publishedYear: 1965,
    available: false,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    publishedYear: 2011,
    available: true,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publishedYear: 1988,
    available: true,
  },
];

// bookId values match insertion order above: Pragmatic Programmer = 1, Educated = 2, etc.
const reviews = [
  {
    reviewer: "Ada",
    rating: 5,
    comment: "Changed how I think about writing code.",
    bookId: 1,
  },
  {
    reviewer: "Marcus",
    rating: 4,
    comment: "Dense but worth it. Re-read every year.",
    bookId: 1,
  },
  {
    reviewer: "Sofia",
    rating: 5,
    comment: "One of the most honest memoirs I've read.",
    bookId: 2,
  },
  {
    reviewer: "James",
    rating: 5,
    comment: "A classic. Every sci-fi fan should read it.",
    bookId: 3,
  },
  {
    reviewer: "Priya",
    rating: 4,
    comment: "Took a few chapters to get into, then couldn't stop.",
    bookId: 3,
  },
  {
    reviewer: "Carlos",
    rating: 3,
    comment: "Interesting but a bit long.",
    bookId: 4,
  },
  {
    reviewer: "Amara",
    rating: 5,
    comment: "Short and profound. Read it in one sitting.",
    bookId: 5,
  },
];

async function seed() {
  // force: true drops and recreates all tables every run.
  // Only ever do this here in a seed script — never in app.js startup.
  await db.sync({ force: true });

  await Book.bulkCreate(books);
  await Review.bulkCreate(reviews);

  console.log(`Seeded ${books.length} books and ${reviews.length} reviews.`);
  process.exit();
}

seed();
