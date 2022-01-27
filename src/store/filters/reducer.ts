import { AnyAction } from "redux";
import { FILTER_BOOKS_PREFIX } from "../../constants";

export const booksFilterReducer = (
  state = { showOnlyLiked: false },
  action: AnyAction
) => {
  switch (action.type) {
    case `${FILTER_BOOKS_PREFIX}/SET`:
      return {
        showOnlyLiked: action.payload,
      };
    default:
      return state;
  }
};
