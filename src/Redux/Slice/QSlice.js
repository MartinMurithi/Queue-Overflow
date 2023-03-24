import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  questions: [],
};

export const fetchQuestions = createAsyncThunk("questions/fetch", async(_, thunkApi) => {
  try {
    let response = await axios.get("https://queueoverflow-a52c5-default-rtdb.firebaseio.com/questions.json");
    let data = [];
    let keys = Object.keys(response.data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      data.push({ ...response.data[key], id:key});//this line uses the spread operator to store all the objects and their properties corresponding to their key
    }
    //console.log(data);
    return data;
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});

const QuestionsSlice = createSlice({
  name: "questions slice",
  initialState,
  reducers: {
    updateTodo: (state, action) => {
            return state;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state, action) => {
      //console.log("loading....");
      state.loading = true;
      state.error = "";
      state.questions = [];
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      //console.log("Data has been fetched");
      state.loading = false;
      state.error = "";
      state.questions = action.payload;
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      console.log("Rejected");
      state.loading = false;
      state.error = action.payload;
      state.questions = [];
    });
  },
});

export const { updateTodo } = QuestionsSlice.actions;
export default QuestionsSlice.reducer;
