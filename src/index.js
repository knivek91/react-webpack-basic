import React from "react";
import { render } from "react-dom";

import { Counter } from "./components";

const Hello = () => (
  <>
    <h2>Hello there again</h2>
    <Counter />
  </>
);

render(<Hello />, document.getElementById("root"));
