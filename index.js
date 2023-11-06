import booksInput from "./booksInput.js";
import sortBooksByColumns from "./sortBooksByColumns.js";

console.log(
  "Sort by publication date(desc) then author name(asc):",
  sortBooksByColumns(booksInput, [
    ["publicationDate", false],
    ["author", true],
  ])
);

console.log(
  "Sort by rating(asc) then title(asc):",
  sortBooksByColumns(booksInput, [
    ["rating", true],
    ["title", true],
  ])
);

console.log(
  "Sort by title(desc):",
  sortBooksByColumns(booksInput, [["title", false]])
);
