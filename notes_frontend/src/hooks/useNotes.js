import { useState, useEffect } from 'react';

// PUBLIC_INTERFACE
export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on mount
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // PUBLIC_INTERFACE
  const addNote = (title) => {
    const newNote = {
      id: Date.now(),
      title,
      color: getRandomNoteColor(),
      createdAt: new Date().toISOString(),
    };
    setNotes(prevNotes => [newNote, ...prevNotes]);
    return newNote;
  };

  // PUBLIC_INTERFACE
  const updateNote = (id, title) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, title } : note
      )
    );
  };

  // PUBLIC_INTERFACE
  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  // Helper function to get random note color from Figma design
  const getRandomNoteColor = () => {
    const colors = [
      'var(--color-ff9e9e)',  // Pink
      'var(--color-91f48f)',  // Green
      'var(--color-fff599)',  // Yellow
      'var(--color-9effff)',  // Blue
      'var(--color-b69cff)',  // Purple
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
  };
};
