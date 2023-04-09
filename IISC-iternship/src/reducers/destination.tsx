// this module gives the basic reducers to update the destination store for redux

import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// change destinaion is the only reducer we need, it updates the value for the destination
const destination = createSlice({
    name: "destination",
    initialState: -1,
    reducers: {
        changeDestination(state, action: PayloadAction<number>) {
            return action.payload
        }
    }
})

export const { changeDestination } = destination.actions
export default destination.reducer;