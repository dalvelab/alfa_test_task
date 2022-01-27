import { combineReducers } from "@reduxjs/toolkit";
import { booksReducer } from "./books/reducer";
import { booksFilterReducer } from "./filters/reducer";

export const rootStore = combineReducers({
  transactions: combineReducers({
    booksTransaction: booksReducer,
  }),
  filters: combineReducers({
    booksFilter: booksFilterReducer,
  }),
});
