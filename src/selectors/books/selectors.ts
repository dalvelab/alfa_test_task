import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../models";

export const booksSelector = createSelector(
  (state: RootState) => state.transactions.booksTransaction,
  (books) => {
    return books;
  }
);

export const booksFilterSelector = createSelector(
  (state: RootState) => state.filters.booksFilter,
  (filters) => {
    return filters;
  }
);

export const filteredBooksSelector = createSelector(
  booksSelector,
  booksFilterSelector,
  (data, filters) => {
    const { books } = data;
    const { showOnlyLiked } = filters;
    if (showOnlyLiked) {
      return books.filter((book) => book.isLiked);
    }
    return books;
  }
);
