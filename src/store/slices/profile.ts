import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileType } from '../../shared/types/Profile';

interface Profile {
  users: ProfileType[];
  activeProfile: ProfileType;
}

const initialState: Profile = {
  users: [],
  activeProfile: {
    id: 0,
    birthYear: 0,
    name: '',
    gender: '',
    accountModelId: 0,
    active: false,
  },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setDependent(state, action: PayloadAction<{ dependents: ProfileType[] }>) {
      state.users = action.payload.dependents;
    },

    setActiveProfile(state, action: PayloadAction<{ dependent: ProfileType }>) {
      state.users.map(currentD => {
        if (currentD.id === action.payload.dependent.id) {
          state.activeProfile = action.payload.dependent;
        }
      });
    },
  },
});

export const { setActiveProfile, setDependent } = profileSlice.actions;
export default profileSlice.reducer;
