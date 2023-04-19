import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpenModal: (state) => {
      state.isOpen = true;
    },
    onCloseModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpenModal, onCloseModal } = modalSlice.actions;

export default modalSlice.reducer;
