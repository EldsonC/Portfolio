import { createSlice } from "@reduxjs/toolkit";

interface Cookies {
    sidebar: {
        state: boolean;
    }
}

export const slice = createSlice({
    name: "sidebar",
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
export const stateSideBar = (state: Cookies) => state.sidebar.state;

export default slice.reducer;