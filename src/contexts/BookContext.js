import React, { createContext, useState } from 'react';

export const BookContext = createContext();
 
const BookContextProvider = (props) => {
  const [books] = useState([
    {id: 1, title: 'What if?'},
    {id: 2, title: 'Awareness'},
    {id: 3, title: 'Principle'}
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;