import * as React from "react";
import { render } from "react-dom";
import { Typography } from "antd";

const App = () => (
  <div>
    <Typography.Title level={1}>Hello, world!</Typography.Title>
  </div>
);

render(<App />, document.getElementById("app-root"));
