import React from "react";
import ThemeContextProvider from "./contexts/ThemeContext";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggler />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
