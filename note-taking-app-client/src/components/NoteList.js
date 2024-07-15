import React, { useEffect, useState } from 'react';
import NoteItem from './NoteItem';
import axios from 'axios';
import '../styles/styles.css';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    axios.get('http://localhost:5000/api/notes')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the notes!', error);
      });
  };

  const handleUpdate = (updatedNote) => {
    setNotes(notes.map(note => note._id === updatedNote._id ? updatedNote : note));
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note._id !== id));
  };

  return (
    <div className="container">
      <h2>Notes</h2>
      {notes.map(note => (
        <NoteItem key={note._id} note={note} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NoteList;
