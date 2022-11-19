import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    setDependent(state, dependents: PayloadAction<ProfileType[]>) {
      dependents.payload.map(dependent => {
        state.users.push(dependent);
      });
    },

    setActiveProfile(state, dependent: PayloadAction<ProfileType>) {
      state.users.map(currentD => {
        if (currentD.id === dependent.payload.id) {
          currentD.active = true;
        } else {
          currentD.active = false;
        }
      });
    },
  },
});

export const setActiveProfile = profileSlice.actions.setActiveProfile;
export const setDependent = profileSlice.actions.setDependent;
export default profileSlice.reducer;
