import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Book = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return <li onClick={() => removeBook(book.id)}>{book.title}</li>;
};

export default Book;
