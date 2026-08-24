import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    isAuthOpen: boolean;
}

const initialState: ModalState = {
    isAuthOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openAuthModal: (state) => {
            state.isAuthOpen = true;
        },
        closeAuthModal: (state) => {
            state.isAuthOpen = false;
        },
    },

})

export const { openAuthModal, closeAuthModal } = modalSlice.actions;
export default modalSlice.reducer;