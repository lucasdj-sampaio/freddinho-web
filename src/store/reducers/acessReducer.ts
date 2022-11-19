import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { acess } from './../../shared/types/UserAcess.d';

interface UserAcess {
  userAcess: acess;
}

const initialState = {
  userAcess: {
    id: 0,
    valid: false,
  },
} as UserAcess;

export const acessSlice = createSlice({
  name: 'useracess',
  initialState,
  reducers: {
    setValid(state, acess: PayloadAction<String>) {
      state.userAcess.id = Number(acess.payload);
      state.userAcess.valid = true;
    },
  },
});

export const setValid = acessSlice.actions.setValid;
export default acessSlice.reducer;
