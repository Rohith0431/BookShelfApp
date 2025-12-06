import { useState } from "react";
import useBooksContext from "../hooks/use-books-context.js";

function BookEdit({ book, onHandleSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    editBookById(book.id, title);
    onHandleSubmit();
  };

  return (
    <form className="book-edit" onSubmit={onFormSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={onChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
