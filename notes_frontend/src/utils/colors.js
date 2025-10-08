// PUBLIC_INTERFACE
export const NOTE_COLORS = [
  '#ff9e9e',  // Pink
  '#91f48f',  // Green
  '#fff599',  // Yellow
  '#9effff',  // Blue
  '#b69cff',  // Purple
];

// PUBLIC_INTERFACE
export const getRandomNoteColor = () => {
  return NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)];
};
