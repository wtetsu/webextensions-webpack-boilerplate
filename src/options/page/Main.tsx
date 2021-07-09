/**
 * webextensions-webpack-boilerplate (https://github.com/wtetsu/webextensions-webpack-boilerplate/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import React, { useReducer, useEffect } from "react";
import immer from "immer";

type MainState = {
  field01?: string;
  field02?: string;
  field03?: string;
};

type Action = {
  statePatch: Partial<MainState>;
};

const reducer = (state: MainState, action: Action): MainState => {
  return immer(state, (d) => {
    Object.assign(d, action.statePatch);
  });
};

const defaultState: MainState = {
  field01: "field01 initial value",
  field02: "field02 initial value",
  field03: "field03 initial value",
};

export const Main: React.FC<MainState> = () => {
  const [state, dispatch] = useReducer(reducer, { ...defaultState });

  const save = () => {
    const jsonData = JSON.stringify(state);
    chrome.storage.local.set({ settings: jsonData }, () => {
      console.debug("saved:" + jsonData);
    });
  };

  const restoreDefaults = () => {
    chrome.storage.local.get(["settings"], (data) => {
      console.log(data);

      dispatch({ statePatch: defaultState });
    });
  };

  useEffect(() => {
    chrome.storage.local.get(["settings"], (data) => {
      console.debug("loaded:" + JSON.stringify(data));

      const statePatch = {} as MainState;

      const settings = JSON.parse(data?.settings) as MainState;

      if (settings?.field01 !== undefined) {
        statePatch.field01 = settings?.field01;
      }
      if (settings?.field02 !== undefined) {
        statePatch.field02 = settings?.field02;
      }
      if (settings?.field03 !== undefined) {
        statePatch.field03 = settings?.field03;
      }

      console.log(statePatch);

      dispatch({ statePatch });
    });
  }, []);

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
      <br />
      <input type="button" value="Save" onClick={save} />
      <input type="button" value="Restore Defaults" onClick={restoreDefaults} />
    </>
  );
};
