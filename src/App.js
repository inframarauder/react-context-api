import React from "react";
import { AuthContextProvider, ThemeContextProvider } from "./contexts/index";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggler />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
