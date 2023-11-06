import sortBooksByColumns from '../sortBooksByColumns.js'; 

const unsortedInput = [
  {
    title: "Under the Dome",
    publicationDate: "January 22 2000",
    author: "Stephen King",
    rating: "5",
  },
  {
    title: "The Code Breaker",
    publicationDate: "May 3 2022",
    author: "Walter Isaacson",
    rating: "4.7",
  },
  {
    title: "Icebreaker",
    publicationDate: "February 7 2023",
    author: "Hannah Grace",
    rating: "4.7",
  },
  {
    title: "Big Swiss",
    publicationDate: "May 3 2022",
    author: "Jen Beagin",
    rating: "4.5",
  }
];

describe("sortBooksByColumns", () => {
  test("handles sorting by a specified column", () => {
    const columns = [["rating", true]];

    const sortedBooks = sortBooksByColumns(unsortedInput, columns);
    expect(sortedBooks).toEqual([
      {
        title: "Big Swiss",
        publicationDate: "May 3 2022",
        author: "Jen Beagin",
        rating: "4.5",
      },
      {
        title: "The Code Breaker",
        publicationDate: "May 3 2022",
        author: "Walter Isaacson",
        rating: "4.7",
      },
      {
        title: "Icebreaker",
        publicationDate: "February 7 2023",
        author: "Hannah Grace",
        rating: "4.7",
      },
      {
        title: "Under the Dome",
        publicationDate: "January 22 2000",
        author: "Stephen King",
        rating: "5",
      },
    ]);
  });
  test("handles sorting by multiple columns and orders", () => {
    const column = [
      ["rating", true],
      ["author", false],
    ];

    const sortedBooks = sortBooksByColumns(unsortedInput, column);

    expect(sortedBooks).toEqual([
      {
        title: "Big Swiss",
        publicationDate: "May 3 2022",
        author: "Jen Beagin",
        rating: "4.5",
      },
      {
        title: "The Code Breaker",
        publicationDate: "May 3 2022",
        author: "Walter Isaacson",
        rating: "4.7",
      },
      {
        title: "Icebreaker",
        publicationDate: "February 7 2023",
        author: "Hannah Grace",
        rating: "4.7",
      },
      {
        title: "Under the Dome",
        publicationDate: "January 22 2000",
        author: "Stephen King",
        rating: "5",
      },
    ]);
  });

  test("sorts books by specified columns in descending order", () => {
    const columns = [
      ["publicationDate", false],
      ["author", false],
    ];

    const sortedBooks = sortBooksByColumns(unsortedInput, columns);

    expect(sortedBooks).toEqual([
      {
        title: "Icebreaker",
        publicationDate: "February 7 2023",
        author: "Hannah Grace",
        rating: "4.7",
      },
      {
        title: "The Code Breaker",
        publicationDate: "May 3 2022",
        author: "Walter Isaacson",
        rating: "4.7",
      },
      {
        title: "Big Swiss",
        publicationDate: "May 3 2022",
        author: "Jen Beagin",
        rating: "4.5",
      },
      {
        title: "Under the Dome",
        publicationDate: "January 22 2000",
        author: "Stephen King",
        rating: "5",
      },
    ]);
  });

  test("ignores articles when sorting by title", () => {
    const columns = [
      ["title", true],
    ];

    const sortedBooks = sortBooksByColumns(unsortedInput, columns);

    expect(sortedBooks).toEqual([
      {
        title: "Big Swiss",
        publicationDate: "May 3 2022",
        author: "Jen Beagin",
        rating: "4.5",
      },
      {
        title: "The Code Breaker",
        publicationDate: "May 3 2022",
        author: "Walter Isaacson",
        rating: "4.7",
      },
      {
        title: "Icebreaker",
        publicationDate: "February 7 2023",
        author: "Hannah Grace",
        rating: "4.7",
      },
      {
        title: "Under the Dome",
        publicationDate: "January 22 2000",
        author: "Stephen King",
        rating: "5",
      },
    ]);
  });

  test('handles empty book input', ()=>{
    const columns = [["title", false]]
    const sortedBooks = sortBooksByColumns([], columns);
    expect(sortedBooks).toEqual([]);
  })

  test('handles empty column input', ()=>{
    const columns = [];
    const sortedBooks = sortBooksByColumns(unsortedInput, columns);
    expect(sortedBooks).toEqual(unsortedInput);
  })
});