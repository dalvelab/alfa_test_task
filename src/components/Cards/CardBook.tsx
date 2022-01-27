import { IBook } from "../../models";

interface IProps {
  book: IBook;
  onClick: () => void;
}

export const CardBook: React.FC<IProps> = (props) => {
  const { book, onClick } = props;
  return (
    <div key={book.id} className="card__book">
      <button
        onClick={onClick}
        className={`card__like__button ${
          book.isLiked && "card__like__button--selected"
        }`}
      >
        <i className="fas fa-heart"></i>
      </button>
      <div className="card__author">{book.author}</div>
      <div className="card__image">
        <img src={book.image} alt="Изображение книги" />
      </div>
      <h3 className="card__title">{book.title}</h3>
      <span className="card__description">{book.description}</span>
    </div>
  );
};
