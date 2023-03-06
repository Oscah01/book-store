import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  categories: [],
  status: 'Under development',
};

// create slice
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under construction',
    }),
  },
});

// export actions
export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
