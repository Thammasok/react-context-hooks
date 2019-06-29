import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;

    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(context) => {
              const { isAuthenticated } = authContext;
              const { isLightTheme, light, dark } = context;
              const theme = isLightTheme ? light : dark;
          
              return (
                <nav 
                  style={{
                    background: theme.ui,
                    color: theme.syntax
                  }}
                >
                  <h1>Context App</h1>
                  <div>{isAuthenticated ? 'Logged In' : 'Logged Out'}</div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              )
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
 
export default Navbar;