// this is the module used to keep the reducers for mode store

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// changeMode is the only required reducer.
const mode = createSlice({
    name: "mode",
    initialState: -1,
    reducers: {
        changeMode(state, action: PayloadAction<number>) {
            return action.payload
        }
    }
})

export const { changeMode } = mode.actions
export default mode.reducer;