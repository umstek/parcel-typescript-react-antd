import * as React from "react";
import { render } from "react-dom";
import { Typography, Button } from "antd";

const App = () => (
  <div>
    <Typography.Title level={1}>Hello, world!</Typography.Title>
    <Button>Test</Button>
  </div>
);

render(<App />, document.getElementById("app-root"));
