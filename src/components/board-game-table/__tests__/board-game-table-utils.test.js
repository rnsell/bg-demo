import { selectBoardGames } from "../board-game-table-utils";

it("Should return blank array empty array", () => {
  const resultArray = selectBoardGames(1, 10, []);

  expect(resultArray.length).toEqual(0);
});

it("Should return all values in array less than page size", () => {
  const testData = Array(8).fill(1);
  const resultArray = selectBoardGames(1, 10, testData);

  expect(testData).toEqual(resultArray);
});

it("Should return second page values", () => {
  const testData1 = Array(10).fill(1);
  const testData2 = Array(10).fill(2);
  const testData3 = Array(10).fill(3);
  const allTestData = [...testData1, ...testData2, ...testData3];

  const resultArray = selectBoardGames(2, 10, allTestData);

  expect(testData2).toEqual(resultArray);
});
