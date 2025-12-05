import BookShow from "./BookShow";

function BookList({ books, deleteBookById, editBookById }) {
  const rederBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        editBookById={editBookById}
        deleteBookById={deleteBookById}
      />
    );
  });

  return <div className="book-list">{rederBooks}</div>;
}

export default BookList;
