import {createSlice} from '@reduxjs/toolkit';

export const templateSlice = createSlice({
  name: 'template',
  initialState: {
    value: 0,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setValue
} = templateSlice.actions

export default templateSlice.reducer
