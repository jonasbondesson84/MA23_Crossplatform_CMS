import { createAction, createReducer } from "@reduxjs/toolkit";


const addQuestion = createAction('add question');
const deleteQuestion = createAction('delete question');

const actions = {addQuestion, deleteQuestion};

const initialState = [];

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(addQuestion, (state, action) => {
            state.push({question: action.payload});
        })
})

export {reducer, actions};