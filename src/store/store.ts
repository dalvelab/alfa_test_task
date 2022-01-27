import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootStore } from "./reducer";

export const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(thunk))
);
