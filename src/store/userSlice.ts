import { createSlice } from '@reduxjs/toolkit';

type initialState = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

const initialState = {
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
};
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTokens } = userSlice.actions;

export default userSlice.reducer;
