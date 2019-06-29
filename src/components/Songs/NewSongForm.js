import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    
    addSong(title);

    // Set input '' after add title
    setTitle('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name: </label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      {` `}
      <button type="submit">Add</button>
    </form>
  );
}
 
export default NewSongForm;