import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BooksProvider } from "./context/books.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksProvider>
      <App />
    </BooksProvider>
  </StrictMode>
);
