import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    isTrailerOpen: boolean;
    activeTrailerUrl: string,
    activeTrailerTitle: string;
}

const initialState: ModalState = {
    isTrailerOpen: false,
    activeTrailerUrl: '',
    activeTrailerTitle: '',
};

const trailerSlice = createSlice({
    name: "trailer",
    initialState,
    reducers: {
        openTrailerWindow: (state, action: PayloadAction<{ url: string; title: string }>) => {
            state.isTrailerOpen = true;
            state.activeTrailerUrl = action.payload.url;
            state.activeTrailerTitle = action.payload.title;
        },
        closeTrailerWindow: (state) => {
            state.isTrailerOpen = false;
            state.activeTrailerUrl = "";
            state.activeTrailerTitle = "";
        }
    }
})

export const { openTrailerWindow, closeTrailerWindow } = trailerSlice.actions;
export default trailerSlice.reducer;