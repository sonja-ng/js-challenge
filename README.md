# js-challenge

- Runtime env: Node.js
- Unit testing framework: Jest

## Set up
1. Clone repo
2. Run `npm i` in project root folder
3. To see outputs printed in terminal: run `node index.js` in project root folder
4. To run tests: run `npm test` in project root folder

## Notes
- Originally wrote three sorting functions and thought their logic were a bit similar, so decided to write a more dynamic function `sortBooksByColumns` that can process different sorting criteria. The function takes in two arguments: a dataset array, and an array of criteria: `[[columnKey: String, isAsc: Boolean], ...]`
- The formatting logic is specific to this exercise, so did not account for other potential real world edge cases such as authors having middle initial, multiple last names, etc. or if column data is null/incomplete