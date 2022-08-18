import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk, registerUserThunk } from './authOperations';

const initialState = {
  isAuth: false,
  email: null,
  token: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    email: null,
    token: null,
    isLoading: false,
    error: null,
    localId: null,
  },
  reducers: {
    logOutUser(state, { payload }) {
      return { ...initialState };
    },
  },
  extraReducers: {
    [loginUserThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
      state.isAuth = false;
    },
    [loginUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [loginUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.email = payload.email;
      state.token = payload.idToken;
      state.isAuth = true;
      state.localId = payload.localId;
    },
    [registerUserThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
      state.isAuth = false;
    },
    [registerUserThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [registerUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.email = payload.email;
      state.token = payload.idToken;
      state.isAuth = true;
      state.localId = payload.localId;
    },
  },
});

export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
