import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from 'utils/firebaseApi';

export const loginUserThunk = createAsyncThunk('loginUser', async (param, { rejectWithValue }) => {
  try {
    const data = await loginUserApi(param);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const registerUserThunk = createAsyncThunk(
  'registerUser',
  async (param, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(param);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
