/**
 * webextensions-webpack-boilerplate (https://github.com/wtetsu/webextensions-webpack-boilerplate/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import { plus } from "../src/lib/awesome";

test("", () => {
  expect("hello").toEqual(plus("hel", "lo"));
});
