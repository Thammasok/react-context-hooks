import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/Books/BookLists';
import SongLists from './components/Songs/SongLists';
import ThemeToggle from './components/ThemeToggle';

import ThemeContextProvider from './contexts/ThemeContext';
import HookContextProvider from './contexts/HookContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
        <hr />
        <HookContextProvider>
          <SongLists />
        </HookContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
