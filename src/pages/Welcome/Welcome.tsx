import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardBook, Container, Navbar } from "../../components";
import { getBooks, setBooksFilter, setBookLike } from "../../actions";
import {
  booksFilterSelector,
  filteredBooksSelector,
  booksSelector,
} from "../../selectors";
import { IBook } from "../../models";

// STYLES
import "./Welcome.scss";

export const WelcomePage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector(filteredBooksSelector);
  const filter = useSelector(booksFilterSelector);
  const { loading } = useSelector(booksSelector);

  const handleFilterClick = () => {
    dispatch(setBooksFilter(!filter.showOnlyLiked));
  };

  const handleLikeClick = (book: IBook) => {
    dispatch(setBookLike(book));
  };

  return (
    <>
      <Navbar />
      <main className="main__layer">
        <Container>
          <div className="filters__wrapper">
            <button className="filter__button" onClick={handleFilterClick}>
              {filter.showOnlyLiked ? "Показать все" : "Показать избранные"}
            </button>
          </div>
          {loading && <span className="emptyText">Загрузка...</span>}
          {books.length === 0 && !loading && (
            <span className="emptyText">
              Книг нет, попробуйте изменить настройки фильтра
            </span>
          )}
          <div className="cards__wrapper">
            {books.map((book) => (
              <CardBook
                key={book.id}
                book={book}
                onClick={() => handleLikeClick(book)}
              />
            ))}
          </div>
        </Container>
      </main>
    </>
  );
};
