import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    sidebarmobile: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "sidebarmobile",
    initialState: {
        state: false
    },

    reducers: {
        show(state) {
            return {
                ...state,
                state: true
            }
        },

        hide(state) {
            return {
                ...state,
                state: false
            }
        }
    }
});

export const { show, hide } = slice.actions;
export const statesidebarmobile = (state: Cookies) => state.sidebarmobile.state;

export default slice.reducer;