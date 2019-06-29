import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, isLightTheme } = useContext(ThemeContext);
  return (
    <button className="btn btn-primary" onClick={toggleTheme}>Change to {isLightTheme ? 'Dark' : 'Light'} mode.</button>
  );
}
 
export default ThemeToggle;