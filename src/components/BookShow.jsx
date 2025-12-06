import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context.js";

function BookShow({ book }) {
  const [showEditButton, setEditButton] = useState(false);
  const { deleteBookById } = useBooksContext();

  const onHandleSubmit = () => {
    setEditButton(!showEditButton);
  };

  let content = <h3>{book.title}</h3>;

  if (showEditButton) {
    content = <BookEdit book={book} onHandleSubmit={onHandleSubmit} />;
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="Book Cover"
      />
      <div className="book-show__content">{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setEditButton(!showEditButton)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
