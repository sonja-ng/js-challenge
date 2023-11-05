function formatBook(book) {
  return {
    title: formatTitle(book.title),
    publicationDate: formatDate(book.publicationDate),
    author: formatName(book.author),
    rating: formatRating(book.rating),
  };
}

function formatTitle(title) {
  const articles = new Set(["The", "A", "An"]);
  const titleArr = title.split(" ");

  return articles.has(titleArr[0])
    ? titleArr.slice(1).join(" ")
    : titleArr.join(" ");
}

function formatDate(date) {
  return new Date(date);
}

function formatName(name) {
  return name.toLowerCase().split(" ").reverse().join(" ");
}

function formatRating(rating) {
  return rating === "no rating" ? 6 : Number(rating);
}

module.exports = { formatBook, formatTitle, formatName, formatRating };
