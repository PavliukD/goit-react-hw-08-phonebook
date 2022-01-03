import { useDispatch } from "react-redux"
import { LogoutUser } from "../../redux/phonebook/phonebook-operations"
import s from './LogoutButton.module.css'


export default function LogoutButton(){

    const dispatch = useDispatch()

    const LogOut = () => {
        dispatch(LogoutUser())
    }

    return(
        <button type="button" onClick={LogOut} className={s.button}>Logout</button>
    )
}