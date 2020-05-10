import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { books, addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    addBook({ id: books[books.length - 1].id + 1, title: title });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input type="submit" autoComplete="off" />
    </form>
  );
};

export default BookForm;
