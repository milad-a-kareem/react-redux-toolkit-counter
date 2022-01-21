import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter-slice"
import visibilitySlice from "./visibility-slice"

const store = configureStore({
    reducer: {counter: counterSlice, visibility: visibilitySlice}
})

export default store