import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: { topics: {} },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addQuiz, (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      if (topicId === state.topics.id) {
        state.topics.quizIds.push(id);
      }
    });
  },
});

export const selectAllTopics = (state) => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
