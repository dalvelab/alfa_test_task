import { AnyAction } from "redux";
import { API_BOOKS_PREFIX, BOOK_LIKE_PREFIX } from "../../constants";

export const booksReducer = (state = { books: [] }, action: AnyAction) => {
  switch (action.type) {
    case `${API_BOOKS_PREFIX}/GET_REQUEST`:
      return { loading: true, ...state };
    case `${API_BOOKS_PREFIX}/GET_SUCCESS`:
      return {
        loading: false,
        books: action.payload,
      };
    case `${BOOK_LIKE_PREFIX}/SET`:
      return {
        loading: false,
        books: action.payload,
      };
    case `${API_BOOKS_PREFIX}/GET_FAILURE`:
      return { loading: false };
    default:
      return state;
  }
};
