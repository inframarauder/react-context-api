import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Murder On the Orient Express", id: 1 },
    { title: "A Murder Is Announced", id: 2 },
    { title: "Algorithms To Live By", id: 3 },
  ]);

  const addBook = (book) => setBooks(books.push(book));
  const removeBook = (id) => setBooks(books.filter((book) => book.id !== id));
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
