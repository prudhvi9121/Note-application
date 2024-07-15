import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/notes', { title, content })
      .then(response => {
        alert("Note Added!");
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error('There was an error adding the note!', error);
      });
  };

  return (
    <div className="container">
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
