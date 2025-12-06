import { useState } from "react";
import useBooksContext from "../hooks/use-books-context.js";

function BookCreate() {
  const [bookTitle, setBookTitle] = useState("");
  const { createBook } = useBooksContext();

  const onTextChange = (event) => {
    setBookTitle(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    createBook(bookTitle);
    setBookTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a New Book</h3>
      <form onSubmit={onFormSubmit}>
        <label>Add Book</label>
        <input
          className="input"
          type="text"
          value={bookTitle}
          onChange={onTextChange}
        />
        <button className="button">Add Book</button>
      </form>
    </div>
  );
}

export default BookCreate;
