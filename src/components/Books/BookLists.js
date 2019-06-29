import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

class BookList extends Component {
  // static contextType = ThemeContext;
  render() { 
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;

    return (
      <ThemeContext.Consumer>
        { (context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;

          return (
            <div
              className="book-list" 
              style={{
                color: theme.syntax,
                background: theme.bg
              }}
            >
              <ul>
                <li style={{ background: theme.ui }}>What if?</li>
                <li style={{ background: theme.ui }}>Awareness</li>
                <li style={{ background: theme.ui }}>Principle</li>
              </ul>
            </div>
          )
        }}
      </ThemeContext.Consumer>
     );
  }
}
 
export default BookList;