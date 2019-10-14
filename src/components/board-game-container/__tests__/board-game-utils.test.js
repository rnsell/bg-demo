import { getBoardGameData } from "../board-game-utils";

it("Should fetch board game data", async () => {
  const data = await getBoardGameData();

  expect(data.length > 0).toEqual(true);
});
