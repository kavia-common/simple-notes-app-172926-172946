import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// PUBLIC_INTERFACE
const NoteEditor = ({ note, onSave, onClose }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSave(title.trim());
      setTitle('');
    }
  };

  return (
    <div className="note-editor" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 100,
    }}>
      <div style={{
        backgroundColor: note ? note.color : 'var(--color-ff9e9e)',
        padding: '20px',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '365px',
      }}>
        <form onSubmit={handleSubmit}>
          <textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your note"
            style={{
              width: '100%',
              height: '150px',
              padding: '10px',
              border: 'none',
              backgroundColor: 'transparent',
              fontFamily: 'var(--typo-13-family)',
              fontSize: 'var(--typo-13-size)',
              fontWeight: 'var(--typo-13-weight)',
              lineHeight: 'var(--typo-13-line-height)',
              color: 'var(--typo-13-color)',
              resize: 'none',
            }}
            autoFocus
          />
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
            marginTop: '10px',
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: 'var(--color-252525)',
                color: 'var(--color-ffffff)',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '5px',
                backgroundColor: 'var(--color-3b3b3b)',
                color: 'var(--color-ffffff)',
                cursor: 'pointer',
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

NoteEditor.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    color: PropTypes.string,
    createdAt: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NoteEditor;
