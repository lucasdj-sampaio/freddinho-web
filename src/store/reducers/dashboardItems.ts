import { createSlice } from '@reduxjs/toolkit';
import ManagerImg from '../../../public/img/gestao_icon.svg';
import RegisterImg from '../../../public/img/registro_icon.svg';
import ReportImg from '../../../public/img/relatorio_icon.svg';
import { DashBoardItems } from '../../shared/types/MenuItem';

interface ItemsState {
  items: DashBoardItems[];
}

const initialState = {
  items: [
    {
      title: 'Gestão',
      img: ManagerImg,
      details:
        'Lorem ipsum dolor sit amet, consecteadipiscing elit. Aeneanlo, gravida finibus maximus.',
      navigatePath: '/gestao',
    },
    {
      title: 'Registros de Exceção',
      img: RegisterImg,
      details:
        'Lorem ipsum dolor sit amet, consecteadipiscing elit. Aeneanlo, gravida finibus maximus.',
      navigatePath: '/registro-excecao',
    },
    {
      title: 'Relatórios',
      img: ReportImg,
      details:
        'Lorem ipsum dolor sit amet, consecteadipiscing elit. Aeneanlo, gravida finibus maximus.',
      navigatePath: '/relatorios',
    },
  ],
} as ItemsState;

export const itemsSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});

export default itemsSlice.reducer;
