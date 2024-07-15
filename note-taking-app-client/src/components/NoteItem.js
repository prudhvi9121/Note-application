import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const NoteItem = ({ note, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleUpdate = () => {
    axios.put(`http://localhost:5000/api/notes/${note._id}`, { title, content })
      .then(response => {
        setIsEditing(false);
        onUpdate(response.data);
      })
      .catch(error => {
        console.error('There was an error updating the note!', error);
      });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/notes/${note._id}`)
      .then(() => {
        onDelete(note._id);
      })
      .catch(error => {
        console.error('There was an error deleting the note!', error);
      });
  };

  return (
    <div className="note-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="buttons">
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div className="buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteItem;
