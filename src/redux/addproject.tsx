import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    addproject: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "addproject",
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
export const stateAddproject = (state: Cookies) => state.addproject.state;

export default slice.reducer;