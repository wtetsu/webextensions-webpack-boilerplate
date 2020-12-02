/**
 * webextensions-webpack-boilerplate (https://github.com/wtetsu/webextensions-webpack-boilerplate/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import React from "react";
import { render } from "react-dom";
import { Main } from "./page/Main";

const App = () => {
  return <Main />;
};

render(<App />, document.getElementById("app"));
