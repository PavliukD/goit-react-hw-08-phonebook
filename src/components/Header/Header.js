import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import UserMenu from "../UserMenu/UserMenu"
import AuthMenu from "../AuthMenu/AuthMenu"
import { token } from "../../services/api/api"
import s from './Header.module.css'

export default function Header(){
    
    const logged = useSelector((store) => {
        token.set(store.auth.token)
        return store.auth.loggedIn})

    return(
        <>
            <header className={s.header}>
                <h1>Phonebook</h1>
                { logged ? <UserMenu/> : <AuthMenu/>}
            </header> 
            <main>
                <Outlet />
            </main>
        </>
    )
}