import { createSlice } from '@reduxjs/toolkit';
import { ProfileType } from '../../shared/types/Profile';

interface Profile {
  users: ProfileType[];
}

const initialState = {
  users: [],
} as Profile;

export const profileSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
