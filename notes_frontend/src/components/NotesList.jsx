import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import '../styles/NotesList.css';

// PUBLIC_INTERFACE
const NotesList = ({ notes, onNoteClick }) => {
  return (
    <div className="notes-list">
      <div className="notes-grid">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onClick={onNoteClick}
          />
        ))}
      </div>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onNoteClick: PropTypes.func.isRequired,
};

export default NotesList;
