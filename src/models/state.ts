import { IBook } from "./books";

interface ITransactionsState {
  booksTransaction: {
    loading: boolean;
    books: IBook[];
  };
}

interface IBookFilterState {
  booksFilter: {
    showOnlyLiked: boolean;
  };
}

export interface RootState {
  transactions: ITransactionsState;
  filters: IBookFilterState;
}
