import React from "react";
import { convertArrayToDictionary, getBoardGameData } from "./board-game-utils";
import { sortBy } from "lodash";
import { message } from "antd";

export const BoardGamesContext = React.createContext({
  gamesDictionary: new Map(),
  gamesArray: [],
  isLoading: true,
  simulateFetchingData: () => void 0
});

export class BoardGamesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.fetchContainerData = this.fetchContainerData.bind(this);
    this.state = {
      gamesDictionary: new Map(),
      gamesArray: [],
      isLoading: true
    };
  }

  async fetchContainerData() {
    this.setState({ isLoading: true });
    try {
      const boardGameData = await getBoardGameData();
      const gamesArray = sortBy(boardGameData, "bg_title");
      const gamesDictionary = convertArrayToDictionary("guid", gamesArray);
      this.setState({
        gamesArray,
        gamesDictionary,
        isLoading: false
      });
    } catch (ex) {
      if (ex.message === "ERROR_FETCHING_DATA") {
        message.error("Error occured fetching data");
      }
      this.setState({
        isLoading: false
      });
    }
  }

  componentDidMount() {
    this.fetchContainerData();
  }

  render() {
    const { children } = this.props;
    const value = {
      ...this.state,
      simulateFetchingData: this.fetchContainerData
    };

    return (
      <>
        <BoardGamesContext.Provider value={value}>
          {children}
        </BoardGamesContext.Provider>
      </>
    );
  }
}
