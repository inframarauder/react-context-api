import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggler extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { toggleTheme } = context;
          return <button onClick={toggleTheme}>Toggle Theme!</button>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeToggler;