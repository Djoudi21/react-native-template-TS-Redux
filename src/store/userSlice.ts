import { createSlice } from '@reduxjs/toolkit';

type initialState = {
  tokens: {
    accessToken: string | null;
    refreshToken: string | null;
  };
};

const initialState = {
  tokens: {
    accessToken: null,
    refreshToken: null,
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
