import { configureStore } from '@reduxjs/toolkit';
import { BurgerReducer } from './reducers/BurgerReducer';


export const store = configureStore({
  reducer: {
    BurgerReducer: BurgerReducer,
  },
});
