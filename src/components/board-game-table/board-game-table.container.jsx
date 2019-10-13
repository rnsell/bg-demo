import React, { useContext, useState } from "react";
import { BoardGamesContext } from "../board-game-container";
import { selectBoardGames } from "./board-game-table-utils";
import { LoadingBoardGameTable } from "./board-game-table-skeleton.component";
import { BoardGameTable } from "./board-game-table.component";

const PAGE_SIZE = 10;

export const BoardGameTableContainer = () => {
  const value = useContext(BoardGamesContext);
  const { gamesArray, simulateFetchingData, isLoading } = value;
  const totalBoardGames = gamesArray.length;
  const [currentPage, setPage] = useState(1);
  const boardGames = selectBoardGames(currentPage, PAGE_SIZE, gamesArray);
  const handlePageChange = page => {
    setPage(page);
    simulateFetchingData();
  };

  return isLoading ? (
    <LoadingBoardGameTable />
  ) : (
    <BoardGameTable
      totalBoardGames={totalBoardGames}
      boardGames={boardGames}
      handlePageChange={handlePageChange}
      current={currentPage}
    />
  );
};
