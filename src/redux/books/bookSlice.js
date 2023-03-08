import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'Dad is Fat',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Dad why are we poor?',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'Eat that frog',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => {
      const { id } = action.payload;
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.item_id !== id);
      return newState;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
