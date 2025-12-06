import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context.js";
import "./styles/App.css";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1 className="title">Bookshelf</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
