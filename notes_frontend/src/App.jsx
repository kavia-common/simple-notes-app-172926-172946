import React, { useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';
import { useNotes } from './hooks/useNotes';

// PUBLIC_INTERFACE
function App() {
  const { notes, addNote, updateNote, deleteNote } = useNotes();
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddNote = () => {
    setSelectedNote(null);
    setIsEditing(true);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setIsEditing(true);
  };

  const handleSaveNote = (title) => {
    if (selectedNote) {
      updateNote(selectedNote.id, title);
    } else {
      addNote(title);
    }
    setIsEditing(false);
  };

  const handleCloseEditor = () => {
    setIsEditing(false);
    setSelectedNote(null);
  };

  return (
    <div className="home-screen">
      <h1 className="hero-text">Notes</h1>

      <div className="action-button search-button">
        <img src="/figmaimages/figma_image_111_12.png" alt="Search" className="icon" />
      </div>

      <div className="action-button info-button">
        <img src="/figmaimages/figma_image_113_14.png" alt="Info" className="icon" />
      </div>

      <NotesList
        notes={notes}
        onNoteClick={handleNoteClick}
      />

      <div 
        className="add-button-container"
        onClick={handleAddNote}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleAddNote();
          }
        }}
      >
        <img src="/figmaimages/figma_image_181_116.png" alt="Add note" className="add-icon" />
      </div>

      {isEditing && (
        <NoteEditor
          note={selectedNote}
          onSave={handleSaveNote}
          onClose={handleCloseEditor}
        />
      )}
    </div>
  );
}

export default App;
