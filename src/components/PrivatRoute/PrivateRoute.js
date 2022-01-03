import { useSelector } from "react-redux"
import {Navigate} from 'react-router-dom'

export default function PrivateRoute({children}){
    const logged = useSelector((store) => {return store.auth.loggedIn })
    
    return logged ? children : <Navigate to="/" />
}

