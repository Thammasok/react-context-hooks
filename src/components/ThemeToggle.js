import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme, isLightTheme } = this.context;

    return (
      <button className="btn btn-primary" onClick={toggleTheme}>Change to {isLightTheme ? 'Dark' : 'Light'} mode.</button>
    );
  }
}
 
export default ThemeToggle;