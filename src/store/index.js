import { configureStore } from '@reduxjs/toolkit';
import callsReducer from './slices/calls/callsSlice';

export const store = configureStore({
  reducer: {
    calls: callsReducer,
  },
})