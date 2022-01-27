import { IBook } from "./books";

interface ITransactionsState {
  booksTransaction: {
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
