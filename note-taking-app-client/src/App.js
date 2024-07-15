import React from 'react';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import './styles/styles.css';

const App = () => {
  return (
    <div className="main-container">
      <h2 className="header">Note-Taking Application</h2>
      <div className="content-container">
        <AddNote />
        <NoteList />
      </div>
    </div>
  );
};

export default App;
