import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";
import s from './UserMenu.module.css'

export default function UserMenu(){

    const userName = useSelector((state) => {
        return state.auth.user.name})


    return(
        <div className={s.userMenu}> 
            <div className={s.navigation}>
                <NavLink to="phonebook" className="link">Contacts</NavLink>
                <NavLink to="addContact" className="link">Add Contact</NavLink>
            </div>
            <div className={s.user}>
                <p className={s.wellcome}>Wellcome, {userName}!</p>
                <LogoutButton />
            </div>
        </div>
    )
}