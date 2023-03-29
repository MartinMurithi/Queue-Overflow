
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../firebase';

const initialState = {
  user: "",
  status: false,
  error: "",
};

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log(user);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user slice',
  initialState,
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.status = true;
      state.error = "";
      state.user = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = false;
      state.error = "";
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = true;
      state.error = action.payload;
      state.user = "";
    });
  }) 
});

export default userSlice.reducer;
