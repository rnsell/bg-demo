import { chunk, get } from "lodash";

export const selectBoardGames = (pageNumber, pageSize, sourceArray) => {
  const adjustedPageNumber = pageNumber - 1;
  const chunkArray = chunk(sourceArray, pageSize);
  const chunkedData = get(chunkArray, `[${adjustedPageNumber}]`, []);

  return chunkedData;
};
