import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import UserMenu from "../UserMenu/UserMenu"
import AuthMenu from "../AuthMenu/AuthMenu"

export default function Header(){
    
    const logged = useSelector((store) => {return store.auth.loggedIn})

    return(
        <>
            <header>
                <h1>Phonebook</h1>
                { logged ? <UserMenu/> : <AuthMenu/>}
            </header> 
            <main>
                <Outlet />
            </main>
        </>
    )
}