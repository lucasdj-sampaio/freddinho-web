import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import profileSlice from './reducers/profileReducer';

const store = configureStore({
  reducer: {
    profiles: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type MyDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<MyDispatch>();
export default store;
