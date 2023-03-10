import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
};

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under construction',
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
