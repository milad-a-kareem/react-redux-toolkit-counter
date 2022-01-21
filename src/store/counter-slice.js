import {  createSlice } from "@reduxjs/toolkit"

const initialCounterState={
    counter: 0,
}


const counterSlice = createSlice(
    {
        name: 'counter',
        initialState: initialCounterState,
        reducers: {
            inc(state){ state.counter += 1 },
            dec(state){ state.counter -= 1 },
            increseby(state, action){
                state.counter += action.payload
            }
        }
    }
)


export const counterActions = counterSlice.actions

export default counterSlice.reducer