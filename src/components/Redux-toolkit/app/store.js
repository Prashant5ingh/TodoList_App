import {configureStore} from '@reduxjs/toolkit';  // core redux
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})  // takes an object as args
// One application has only one store.