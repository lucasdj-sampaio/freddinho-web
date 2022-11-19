import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { acess } from './../../shared/types/UserAcess.d';

interface UserAcess {
  userAcess: acess;
}

const initialState: UserAcess = {
  userAcess: {
    id: 0,
    valid: false,
  },
};

export const acessSlice = createSlice({
  name: 'access',
  initialState,
  reducers: {
    setValid(state, action: PayloadAction<{ id: String }>) {
      state.userAcess = {
        id: Number(action.payload.id),
        valid: true,
      };
    },
  },
});

export const { setValid } = acessSlice.actions;
export default acessSlice.reducer;
