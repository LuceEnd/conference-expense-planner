// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from 'avSlice.js';
import mealReducer from 'mealSlice.js';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meal: mealReducer,
  },
});
