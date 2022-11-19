import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileType } from '../../shared/types/Profile';

interface Profile {
  users: ProfileType[];
  activeProfile: ProfileType;
}

const initialState = {
  users: [],
  activeProfile: {
    id: 0,
    birthYear: 0,
    name: '',
    gender: '',
    accountModelId: 0,
    active: false,
  },
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
          state.activeProfile = dependent.payload;
        }
      });
    },
  },
});

export const setActiveProfile = profileSlice.actions.setActiveProfile;
export const setDependent = profileSlice.actions.setDependent;
export default profileSlice.reducer;
