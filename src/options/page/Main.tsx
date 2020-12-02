/**
 * webextensions-webpack-boilerplate (https://github.com/wtetsu/webextensions-webpack-boilerplate/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import React, { useReducer } from "react";
import immer from "immer";

type MainState = {
  field01: string;
  field02: string;
  field03: string;
};

type Action = {
  statePatch: Partial<MainState>;
};

const reducer = (state: MainState, action: Action): MainState => {
  return immer(state, (d) => {
    Object.assign(d, action.statePatch);
  });
};

const initialState: MainState = {
  field01: "field01 initial value",
  field02: "field02 initial value",
  field03: "field03 initial value",
};

export const Main: React.FC<MainState> = () => {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  return (
    <>
      <label>field01</label>
      <input
        type="text"
        value={state.field01}
        onChange={(e) => dispatch({ statePatch: { field01: e.target.value } })}
      />
      <br />
      <label>field02</label>
      <input
        type="text"
        value={state.field02}
        onChange={(e) => dispatch({ statePatch: { field02: e.target.value } })}
      />
      <br />
      <label>field03</label>
      <input
        type="text"
        value={state.field03}
        onChange={(e) => dispatch({ statePatch: { field03: e.target.value } })}
      />
    </>
  );
};
