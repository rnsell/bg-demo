import React from "react";

import { Row, Col, Divider } from "antd";
import Skeleton from "react-loading-skeleton";

export const BoardGameRowSkeleton = () => {
  return (
    <Row type="flex" gutter={48}>
      <Col xs={{ span: 18 }}>
        <Skeleton />
      </Col>
      <Col xs={{ span: 6 }}>
        <Skeleton />
      </Col>
      <Divider />
    </Row>
  );
};

export const LoadingBoardGameTable = () => {
  const fakeRows = Array(10).fill(0);

  return (
    <>
      <Row>
        <Divider />
        {fakeRows.map(() => {
          return <BoardGameRowSkeleton />;
        })}
      </Row>
    </>
  );
};
