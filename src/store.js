import { configureStore } from '@reduxjs/toolkit'


import {
     Data,
} from './slices'

const store = configureStore({
    reducer:{
        Data:Data
    }
})

export default store;