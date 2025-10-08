import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

// PUBLIC_INTERFACE
const NotesList = ({ notes, onNoteClick }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <NoteItem
          key={note.id}
          note={note}
          onClick={onNoteClick}
          style={{
            top: `${143 + (index * 180)}px`
          }}
        />
      ))}
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
