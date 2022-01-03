import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";

export default function UserMenu(){

    const userName = useSelector((state) => {return state.auth.user.name})

    return(
        <>
            <NavLink to="phonebook">Phonebook</NavLink>
            <NavLink to="addContact">Add Contact</NavLink>
            <p>Wellcome, {userName}</p>
            <LogoutButton />
        </>
    )
}