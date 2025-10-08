import React from 'react';
import PropTypes from 'prop-types';
import '../styles/NoteItem.css';

// PUBLIC_INTERFACE
const NoteItem = ({ note, onClick }) => {
  return (
    <div 
      className="note-card"
      style={{
        backgroundColor: note.color,
      }}
      onClick={() => onClick(note)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(note);
        }
      }}
    >
      <p className="note-card-text">{note.title}</p>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NoteItem;
