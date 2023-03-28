import { configureStore } from "@reduxjs/toolkit";
import QuestionsSlice from '../Slice/QSlice'

export const store = configureStore({
    reducer: {
        questions: QuestionsSlice
    }
})


export default store;