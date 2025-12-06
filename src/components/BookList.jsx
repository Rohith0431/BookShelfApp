import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context.js";

function BookList() {
  const { books } = useBooksContext();
  const rederBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{rederBooks}</div>;
}

export default BookList;
