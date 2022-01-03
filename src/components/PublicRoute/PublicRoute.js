import { useSelector } from "react-redux"
import {Navigate} from 'react-router-dom'

export default function PublicRoute({children}){
    const logged = useSelector((store) => {return store.auth.loggedIn })
    return !logged ? children : <Navigate to="/" />
}