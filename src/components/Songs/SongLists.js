import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';

import NewSongForm from './NewSongForm';
import { HookContext } from '../../contexts/HookContext';

const SongLists = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: 'HONNE - Day 1'},
    { id: 2, title: 'HONNE - Me & You'},
    { id: 3, title: 'Lauv - Paris in the Rain'},
  ]);

  const [age, setAge] = useState(20);

  // Use effect run every time when update data and render (re-render).
  useEffect(() => {
    console.log('useEffect hook run', songs)
  }, [songs]); // Use Effect will run when songs update only.

  useEffect(() => {
    console.log('useEffect age hook run', age)
  }, [age]);

  const addSong = (title) => {
    setSongs([...songs, {id: uuid(), title}]);
  }

  return (
    <HookContext.Consumer>
      {(context) => {
        const { syntax, bg, ui } = context;

        return (
          <div className="song-list" style={{ background: bg }}>
            <ul>
              {songs.map(song => {
                return (
                  <li 
                    key={song.id} 
                    style={{ background: ui, color: syntax }}
                  >
                    {song.title}
                  </li>
                )
              })}
            </ul>

            <NewSongForm addSong={addSong} />
            <br />

            <button className="btn btn-primary" onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
          </div>
        )
      }}
    </HookContext.Consumer>
  );
}
 
export default SongLists;