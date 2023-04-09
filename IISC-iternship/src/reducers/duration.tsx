import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const duration = createSlice({
    name: "duration",
    initialState: -1,
    reducers: {
        changeDuration(state, action: PayloadAction<number>) {
            return action.payload
        }
    }
})

export const { changeDuration } = duration.actions
export default duration.reducer;