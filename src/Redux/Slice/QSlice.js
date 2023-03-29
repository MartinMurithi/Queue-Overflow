import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleAuth } from "./Firebase_config";

const initialState = {
  loading: false,
  error: "",
  questions: [],
  answers: [],
  comments: [],
  upvotes: 0,
  downvote: 0,
  email: "",
  password: "",
  user: ""
};

const QUESTIONS_API =
  "https://queueoverflow-a52c5-default-rtdb.firebaseio.com/questions.json";
const ANSWERS_API =
  "https://queueoverflow-a52c5-default-rtdb.firebaseio.com/answers.json";
const COMMENTS_API =
  "https://queueoverflow-a52c5-default-rtdb.firebaseio.com/comments.json";

export const fetchQuestions = createAsyncThunk(
  "questions/fetch",
  async (_, thunkApi) => {
    try {
      let response = await axios.get(QUESTIONS_API);
      let data = [];
      let keys = Object.keys(response.data);
      let newData = new Array(response.data);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        data.push({ ...response.data[key], id: key }); //this line uses the spread operator to store all the objects and their properties corresponding to their key
      }
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const addQuestion = createAsyncThunk(
  "questions/addquestion",
  async (payload, thunkapi) => {
    try {
      const newQuestion = await axios.post(QUESTIONS_API, { ...payload });
      thunkapi.dispatch(fetchQuestions());
    } catch (error) {
      thunkapi.rejectWithValue(error);
    }
  }
);

export const addAnswer = createAsyncThunk(
  "answer/addanswer",
  async (payload, thunkApi) => {
    try {
      console.log("yppph");
      console.log(payload);
      const newAnswer = await axios.post(ANSWERS_API, { ...payload });
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchAnswers = createAsyncThunk(
  "answers/fetch",
  async (_, thunkApi) => {
    try {
      let response = await axios.get(ANSWERS_API);
      let data = [];
      let keys = Object.keys(response.data);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        data.push({ ...response.data[key], id: key }); //this line uses the spread operator to store all the objects and their properties corresponding to their key
      }
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "comment/addcomment",
  async (payload, thunkApi) => {
    try {
      const newComment = await axios.post(COMMENTS_API, { ...payload });
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const fetchComments = createAsyncThunk(
  "fetchcomments",
  async (_, thunkApi) => {
    try {
      let response = await axios.get(COMMENTS_API);
      let data = [];
      let keys = Object.keys(response.data);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        data.push({ ...response.data[key], id: key }); //this line uses the spread operator to store all the objects and their properties corresponding to their key
      }
      console.log(data);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const signUpWithEmail = createAsyncThunk(
  "signup/users",
  async ({email, password}, thunkApi) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    console.log('create ac');
    console.log(userCredential.user);
    return userCredential;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
  });

export const signInWithEmail = createAsyncThunk("login/users", async({ email, password }, thunkApi) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('user loged in');
    console.log(userCredential.user);
    return userCredential;
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});

export const signInWithGoogle = createAsyncThunk('googlesignup', async (payload, thunkApi) => {
  try {
    const user = await signInWithPopup(auth, googleAuth);
    console.log(user);
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
})

const QuestionsSlice = createSlice({
  name: "questions slice",
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    // FETCH QUESTIONS
    builder.addCase(fetchQuestions.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.questions = [];
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
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

    // ADD QUESTION
    builder.addCase(addQuestion.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addQuestion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // ADD ANSWER
    builder.addCase(addAnswer.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addAnswer.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addAnswer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // FETCH ANSWERS
    builder.addCase(fetchAnswers.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.answers = [];
    });
    builder.addCase(fetchAnswers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.answers = action.payload;
    });
    builder.addCase(fetchAnswers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.answers = [];
    });

    // ADD COMMENTS
    builder.addCase(addComment.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // FETCH COMMENTS
    builder.addCase(fetchComments.pending, (state, action) => {
      state.loading = true;
      state.error = "";
      state.comments = [];
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.comments = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.comments = [];
    });

    builder.addCase(signUpWithEmail.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(signUpWithEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(signUpWithEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

     builder.addCase(signInWithGoogle.pending, (state, action) => {
       state.loading = true;
       state.user = "";
      state.error = "";
    });
    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(signInWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  },
});

export const { updateTodo } = QuestionsSlice.actions;
export default QuestionsSlice.reducer;
