import axios from "axios"


export const api = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/'
})


export const token = {
    set(token){
        api.defaults.headers.common.Autorization = `Bearer ${token}`
    },
    unset(){
        api.defaults.headers.common.Autorization = ''
    }
}


export async function signUp(user){
    try {
        const response = api.post('users/signup', user)
        console.log(response)
        return response
    } catch (error){
        return error
    }
}

export async function logIn(user){
    try {
        const response = api.post('users/login', user)
        console.log(response)
        return response
    } catch (error){
        return error
    }
}

export async function logOut(){
    try {
        const response = api.post('users/logout')
        console.log(response)
        return response
    } catch (error){
        return error
    }
}

export async function getUserInformation(){
    try {
        const response = api.post('users/current')
        console.log(response)
        return response
    } catch (error){
        return error
    }
}

export async function getAllContacts(){
    try {
        return api.get('contacts')
    } catch (error){
        return error
    } 
}

export async function addContact(contact){
    try{
        return api.post('contacts', contact)
    } catch (error){
        return error
    }
}

export async function delContact(id){
    try{
        return api.delete(`contacts/${id}`)
    } catch (error) {
        return error
    }
}