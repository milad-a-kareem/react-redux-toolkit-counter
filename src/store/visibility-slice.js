import {  createSlice } from "@reduxjs/toolkit"

const initialVisibilityState={
    isHidden: false
}

const visibilitySlice = createSlice(
    {
        name: 'visibility',
        initialState: initialVisibilityState,
        reducers: {
            toggleVisibility(state){ state.isHidden= !state.isHidden },
        }
    }
)

export const visibilityActions = visibilitySlice.actions

export default  visibilitySlice.reducer