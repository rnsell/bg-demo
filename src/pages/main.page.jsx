import React from "react";
import { Layout } from "../layout";
import { BoardGamesContainer } from "../components";
import { Row } from "antd";
import { BoardGameTableContainer } from "../components";

export const MainPage = () => {
  return (
    <Layout>
      <BoardGamesContainer>
        <Row type="flex" justify="center">
          <h1>Learn Some Board Games</h1>
        </Row>
        <BoardGameTableContainer />
      </BoardGamesContainer>
    </Layout>
  );
};
