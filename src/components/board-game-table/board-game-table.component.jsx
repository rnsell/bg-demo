import React from "react";
import { Row, Col, Divider, Pagination } from "antd";
import { get } from "lodash";

const BoardGameRow = props => {
  const { title, youtubeId } = props;
  const youtubeLink = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <Row type="flex">
      <Col xs={{ span: 18 }}> {title} </Col>
      <Col xs={{ span: 6 }}>
        <Row type="flex" justify="end">
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            Watch and Learn
          </a>
        </Row>
      </Col>
      <Divider />
    </Row>
  );
};

export const BoardGameTable = props => {
  const { boardGames = [], handlePageChange, totalBoardGames, current } = props;
  return (
    <>
      <Row>
        <Divider />
        {boardGames.map((game, index) => {
          const title = get(game, "bg_title", "");
          const youtubeId = get(game, "youtube_id", "");

          return (
            <BoardGameRow title={title} youtubeId={youtubeId} key={index} />
          );
        })}
      </Row>
      <Row type="flex" justify="end">
        <Pagination
          onChange={handlePageChange}
          total={totalBoardGames}
          current={current}
        />
      </Row>
    </>
  );
};
