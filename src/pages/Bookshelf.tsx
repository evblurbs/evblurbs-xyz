import { books } from "../data/books";
import "./Page.css";
import "./Bookshelf.css";

const Bookshelf = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Bookshelf</h1>
        <div className="page-body">
          <p>
            A partial collection of books I've read, am reading, or plan to
            read. Asterisks mark my favorite books.
          </p>
          <div className="books-list">
            {books.map((book, index) => (
              <div key={index} className="book-item">
                <div className="book-header">
                  <h3 className="book-title">
                    {book.title}
                    {book.isFavorite && (
                      <span className="favorite-asterisk"> *</span>
                    )}
                  </h3>
                  <div className="book-authors">by {book.authors}</div>
                </div>
                <p className="book-description">{book.description}</p>
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="amazon-link"
                >
                  Amazon link
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
