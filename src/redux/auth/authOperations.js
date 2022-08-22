import { async } from '@firebase/util';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from 'utils/firebaseApi';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCqNbfmkpBM8NzWcLwTrWxD4XL8LHK_TlM',
  authDomain: 'wallet-3dac9.firebaseapp.com',
  databaseURL: 'https://wallet-3dac9-default-rtdb.firebaseio.com',
  projectId: 'wallet-3dac9',
  storageBucket: 'wallet-3dac9.appspot.com',
  messagingSenderId: '365122706455',
  appId: '1:365122706455:web:83a64f738d0e0df33a1052',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

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

export const googleAuth = createAsyncThunk('gooogleAuth', async (_, { rejectWithValue }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);
  try {
    const {
      user: { email, accessToken, uid },
    } = await signInWithPopup(auth, provider);
    return { email, accessToken, uid };
  } catch (error) {
    rejectWithValue(error.message);
  }
});
