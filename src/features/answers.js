import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const answerSlice = createSlice({
  name: 'answers', 
  initialState,
  reducers: {
    
    addAnswer: (state, action) => {
      state.push({ answer: action.payload });
    },
   
    updateAnswer: (state, action) => {
      const { id, answer } = action.payload;
      const answerWrapper = state.find(q => q.answer.id === id); 
      if (answerWrapper) {
        answerWrapper.answer.answer = answer; 
      } else {
        console.log('hittade ej');
      }
    },
   
    deleteAnswer: (state, action) => {
      const id = action.payload;
      return state.filter(q => q.answer.id !== id); 
    },
  },
});


export const { addAnswer, updateAnswer, deleteAnswer } = answerSlice.actions;
export default answerSlice.reducer;
