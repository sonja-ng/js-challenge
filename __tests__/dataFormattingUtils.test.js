import {
  formatName,
  formatRating,
  formatTitle,
} from "../dataFormattingUtils.js";

describe("formatName", () => {
  test("downcases and reverses first and last name", () => {
    const authorName = "Stephen King";
    const formattedName = formatName(authorName);

    expect(formattedName).toEqual("king stephen");
  });

  test("handles mononym", () => {
    const authorName = "Plato";
    const formattedName = formatName(authorName);

    expect(formattedName).toEqual("plato");
  });
});

describe("formatRating", () => {
  test("converts rating string to number", () => {
    const rating = "4.5";
    const formattedRating = formatRating(rating);

    expect(formattedRating).toEqual(4.5);
  });

  test('converts "no rating" to 6', () => {
    const noRating = "no rating";
    const formattedRating = formatRating(noRating);

    expect(formattedRating).toEqual(6);
  });
});

describe("formatTitle", () => {
  test('downcases and removes starting article such as "The", "An", "A"', () => {
    const bookTitle1 = "The Legacy Collection";
    const bookTitle2 = "A Little Princess";
    const bookTitle3 = "An Ant";

    const formattedTitle1 = formatTitle(bookTitle1);
    const formattedTitle2 = formatTitle(bookTitle2);
    const formattedTitle3 = formatTitle(bookTitle3);

    expect(formattedTitle1).toEqual("legacy collection");
    expect(formattedTitle2).toEqual("little princess");
    expect(formattedTitle3).toEqual("ant");
  });
});
