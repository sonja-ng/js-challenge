import { formatBook } from './dataFormattingUtils.js';
import booksInput from './booksInput.js';

const sortBooksByColumns = (books, columns) => {
  if (!books.length || !columns.length) return books;

  return [...books].sort((book1, book2) => {
    const formattedBook1 = formatBook(book1);
    const formattedBook2 = formatBook(book2);

    for (const column of columns) {
      const [columnKey, isAsc] = column;

      const comparator = isAsc ? 1 : -1;

      if (formattedBook1[columnKey] < formattedBook2[columnKey])
        return -1 * comparator;
      if (formattedBook1[columnKey] > formattedBook2[columnKey])
        return 1 * comparator;
    }
    return 0;
  });
};

console.log(
  "Sort books by publication date(desc) then author name(asc):",
  sortBooksByColumns(booksInput, [
    ["publicationDate", false],
    ["author", true],
  ])
);

console.log(
  "Sort books by rating(asc) then title(asc):",
  sortBooksByColumns(booksInput, [
    ["rating", true],
    ["title", true],
  ])
);

console.log(
  "Sort books by title(desc):",
  sortBooksByColumns(booksInput, [["title", false]])
);

export default sortBooksByColumns;