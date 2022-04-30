import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todos/todosSlice'

// store'da sadece reducer'larin tanimini yapiyoruz.
export const store= configureStore({
    reducer: {
        todos: todosSlice
    },
})