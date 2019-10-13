import React from "react";
import { Row, Col } from "antd";

const gennerateSpan = span => ({
  span
});

const leftColumnLayout = {
  xs: gennerateSpan(1),
  sm: gennerateSpan(2),
  md: gennerateSpan(4)
};

const rightColumnLayout = {
  xs: gennerateSpan(1),
  sm: gennerateSpan(2),
  md: gennerateSpan(4)
};

const centerColumnLayout = {
  xs: gennerateSpan(22),
  sm: gennerateSpan(20),
  md: gennerateSpan(16)
};

export const Layout = props => {
  const { children } = props;
  return (
    <Row type="flex">
      <Col {...leftColumnLayout}></Col>
      <Col {...centerColumnLayout}>{children}</Col>
      <Col {...rightColumnLayout}></Col>
    </Row>
  );
};
