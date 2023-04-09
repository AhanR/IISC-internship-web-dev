import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

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