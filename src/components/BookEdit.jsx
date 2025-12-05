import { useState } from "react";

function BookEdit({ book, onHandleSubmit }) {
  const [title, setTitle] = useState(book.title);

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit(book.id, title);
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
