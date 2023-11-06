import { formatBook } from "./dataFormattingUtils.js";

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

export default sortBooksByColumns;
