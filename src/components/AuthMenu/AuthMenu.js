import { NavLink } from "react-router-dom";

export default function AuthMenu(){
    return(
        <>
            <NavLink to="/">LogIn</NavLink>
            <NavLink to="signup">SingUp</NavLink>
        </>
    )
}