import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {itemsReducer, filterReducer, authSlice} from "./phonebook/phonebook-reducers"


const rootReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    auth: authSlice,
})



const store = configureStore({
    reducer: rootReducer,
})


export {store}