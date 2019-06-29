import React, { Component, createContext } from 'react';

export const HookContext = createContext();

class HookContextProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      syntax: '#fff',
      ui: '#4BBF73',
      bg: '#ffdd57'
    }
  }
  render() { 
    return (
      <HookContext.Provider value={{ ...this.state }}>
        <h2>React Hooks</h2>
        { this.props.children }
      </HookContext.Provider>
    );
  }
}
 
export default HookContextProvider;