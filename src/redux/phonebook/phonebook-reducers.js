import { createReducer, createSlice } from '@reduxjs/toolkit'
import * as actions from './phonebook-actions'
import * as operations from './phonebook-operations'


const authInitialState = {
    user: {
        email: null,
        name: null,
    },
    token: null,
    loggedIn: false,
}

const authSlice = createSlice ({
    name: 'auth',
    initialState: authInitialState,
    extraReducers:{
        [operations.signUpUser.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.loggedIn = true
        },
        [operations.logInUser.fulfilled](state, action) {
            console.log(action)
            state.user = action.payload.user
            state.token = action.payload.token
            state.loggedIn = true
        },
        [operations.LogoutUser.fulfilled](state, action) {
            state.user = authInitialState.user
            state.token = authInitialState.token
            state.loggedIn = false
        },
        [operations.logInUser.rejected](state, action) {
            console.log(action)
            state.user = ''
            state.token = ''
            state.loggedIn = false
        },
        [operations.signUpUser.rejected](state, action) {
            state.user = ''
            state.token = ''
            state.loggedIn = false
        }
    },
})

const itemsReducer = createReducer([], {
   [operations.getAllContacts.fulfilled]: (_, action) => action.payload,
   [operations.addContact.fulfilled]: (state, action) => {
        if (state.some(contact => {
            return contact.name.toLowerCase() === action.payload.name.toLowerCase()
        })){
            alert(`${action.payload.name} is already in cotacts`)
            return state
        }
        return [...state, action.payload]
   },
   [operations.delContact.fulfilled]: (state, action) => {return state.filter(contact => contact.id !== action.payload)},  
})

const loadingReducer = createReducer(false, {
    [operations.getAllContacts.pending]: () => true,
    [operations.getAllContacts.fulfilled]: () => false,
    [operations.getAllContacts.rejected]: () => false, 
    [operations.getAllContacts.pending]: () => true,
    [operations.getAllContacts.fulfilled]: () => false,
    [operations.getAllContacts.rejected]: () => false,
    [operations.delContact.pending]: () => true,
    [operations.delContact.fulfilled]: () => false,
    [operations.delContact.rejected]: () => false
})


const filterReducer = createReducer('', {
    [actions.filterContacts]: (state, action) => action.payload,
})


export {itemsReducer, filterReducer, loadingReducer, authSlice}

