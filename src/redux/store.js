import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {itemsReducer, filterReducer, authSlice} from "./phonebook/phonebook-reducers"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    auth: authSlice.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persReduser = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persReduser,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

const persistor = persistStore(store)

export {store, persistor}