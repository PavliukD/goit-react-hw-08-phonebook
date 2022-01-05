import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/api/api'


export const getAllContacts = createAsyncThunk(
    'phonebook/getAllContacts',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await api.getAllContacts()
            return data
        } catch (error){
            return rejectWithValue(error)
        }
    }
)

export const addContact = createAsyncThunk(
    'phonebook/addContact',
    async (contact, {rejectWithValue}) => {
        const newContact = {
            name: contact.name,
            number: contact.number
        }
        try {
            const {data} = await api.addContact(newContact)
            return data
        } catch (error){
            return rejectWithValue(error)
        }  
    }
)

export const delContact = createAsyncThunk(
    'phonebook/delContact',
    async (id, {rejectWithValue}) => {
        try {
            await api.delContact(id)
            return id
        } catch (error){
            return rejectWithValue(error)
        }
    }
)

export const signUpUser = createAsyncThunk(
    'phonebook/singUp',
    async (userData, {rejectWithValue}) => {
        try {
            const { data } = await api.signUp(userData)
            api.token.set(data.token)
            return data
        } catch (error){
            alert('Please enter correct data')
            return rejectWithValue(error)
        }
    }
)

export const logInUser = createAsyncThunk(
    'phonebook/login',
    async (userData) => {
        try {
            const { data } = await api.logIn(userData)
            api.token.set(data.token)
            return data
        } catch (error){
            alert('Please enter correct login or password')
            return error
        }
    }
)

export const LogoutUser = createAsyncThunk(
    'phonebook/logoutUser',
    async () => {
        try {
            const response = await api.logOut()
            api.token.unset()
            return response
        } catch (error) {
            return error
        }
    }
)
