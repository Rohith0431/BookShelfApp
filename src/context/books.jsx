import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const res = await axios.get("http://localhost:3001/books");
    setBooks(res.data);
  }, []);

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", { title });
    setBooks([...books, res.data]);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        deleteBookById,
        editBookById,
        createBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { BooksProvider };

export default BooksContext;
