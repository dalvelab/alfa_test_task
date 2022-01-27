import { Dispatch } from "@reduxjs/toolkit";
import { api } from "../../utils";
import {
  API_URL,
  API_BOOKS_PREFIX,
  FILTER_BOOKS_PREFIX,
  BOOK_LIKE_PREFIX,
} from "../../constants";
import { IBook, RootState } from "../../models";

export const getBooks = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: `${API_BOOKS_PREFIX}/GET_REQUEST` });

    const {
      data: { data: booksArray },
    } = await api.get(`${API_URL}/books?_quantity=10`);

    const books: IBook[] = booksArray.map((book: IBook) => ({
      ...book,
      isLiked: false,
    }));

    dispatch({
      type: `${API_BOOKS_PREFIX}/GET_SUCCESS`,
      payload: books,
    });
  } catch (error: unknown) {
    dispatch({
      type: `${API_BOOKS_PREFIX}/GET_FAILURE`,
    });
    console.log(error);
  }
};

export const setBookLike =
  (book: IBook) => (dispatch: Dispatch, getState: () => RootState) => {
    const {
      transactions: {
        booksTransaction: { books },
      },
    } = getState();

    const updatedBooks = books.map((item) => {
      if (item.id === book.id) {
        return { ...item, isLiked: !item.isLiked };
      }
      return item;
    });

    dispatch({ type: `${BOOK_LIKE_PREFIX}/SET`, payload: updatedBooks });
  };

export const setBooksFilter =
  (isShowOnlyLiked: boolean) => async (dispatch: Dispatch) => {
    dispatch({
      type: `${FILTER_BOOKS_PREFIX}/SET`,
      payload: isShowOnlyLiked,
    });
  };
