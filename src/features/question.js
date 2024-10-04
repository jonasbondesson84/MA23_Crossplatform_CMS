import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const questionSlice = createSlice({
  name: 'questions', 
  initialState,
  reducers: {
    
    addQuestion: (state, action) => {
      state.push({ question: action.payload });
    },
   
    updateQuestion: (state, action) => {
      const { id, answer } = action.payload;
      const questionWrapper = state.find(q => q.question.id === id); 
      if (questionWrapper) {
        questionWrapper.question.answer = answer; 
      } else {
        console.log('hittade ej');
      }
    },
   
    deleteQuestion: (state, action) => {
      const id = action.payload;
      return state.filter(q => q.question.id !== id); 
    },
  },
});


export const { addQuestion, updateQuestion, deleteQuestion } = questionSlice.actions;
export default questionSlice.reducer;
