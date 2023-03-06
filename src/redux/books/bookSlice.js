import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  books: [],
};

// create slice
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
});

// export actions
export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
