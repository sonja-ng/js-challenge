export function formatBook(book) {
  return {
    title: formatTitle(book.title),
    publicationDate: formatDate(book.publicationDate),
    author: formatName(book.author),
    rating: formatRating(book.rating),
  };
}

export function formatTitle(title) {
  const articles = new Set(["the", "a", "an"]);
  const titleArr = title.toLowerCase().split(" ");

  return articles.has(titleArr[0])
    ? titleArr.slice(1).join(" ")
    : titleArr.join(" ");
}

function formatDate(date) {
  return new Date(date);
}

export function formatName(name) {
  const nameArr = name.toLowerCase().split(" ");
  return nameArr.length < 2 ? nameArr.join("") : nameArr.reverse().join(" ");
}

export function formatRating(rating) {
  return rating === "no rating" ? 6 : Number(rating);
}
