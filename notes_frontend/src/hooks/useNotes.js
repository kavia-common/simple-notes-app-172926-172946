import { useState, useEffect } from 'react';
import { getRandomNoteColor } from '../utils/colors';

// PUBLIC_INTERFACE
export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on mount
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    } else {
      // Initialize with sample notes if empty
      const sampleNotes = [
        {
          id: 1,
          title: "Book Review : The Design of Everyday Things by Don Norman",
          color: "#ff9e9e",
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          title: "Animes produced by Ufotable",
          color: "#91f48f",
          createdAt: new Date().toISOString()
        },
        {
          id: 3,
          title: "Mangas planned to read",
          color: "#fff599",
          createdAt: new Date().toISOString()
        },
        {
          id: 4,
          title: "Awesome tweets collection",
          color: "#9effff",
          createdAt: new Date().toISOString()
        },
        {
          id: 5,
          title: "List of free & open source apps",
          color: "#b69cff",
          createdAt: new Date().toISOString()
        }
      ];
      setNotes(sampleNotes);
      localStorage.setItem('notes', JSON.stringify(sampleNotes));
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

  return {
    notes,
    addNote,
    updateNote,
    deleteNote,
  };
};
