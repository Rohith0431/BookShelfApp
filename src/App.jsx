import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./styles/App.css";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    console.log("Editing book with id:", id, "to new title:", newTitle);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const onCreateBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
  };

  return (
    <div className="app">
      <h1>Bookshelf</h1>
      <BookList
        books={books}
        deleteBookById={deleteBookById}
        editBookById={editBookById}
      />
      <BookCreate onCreateBook={onCreateBook} />
    </div>
  );
}

export default App;
