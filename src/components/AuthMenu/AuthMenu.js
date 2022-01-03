import { NavLink } from "react-router-dom";
import s from './AuthMenu.module.css'

export default function AuthMenu(){
    return(
        <div className={s.authMenu}>
            <NavLink to="/" className="link">Login</NavLink>
            <NavLink to="signup" className="link">Signup</NavLink>
        </div>
    )
}