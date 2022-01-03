import { useDispatch } from "react-redux"
import { LogoutUser } from "../../redux/phonebook/phonebook-operations"


export default function LogoutButton(){

    const dispatch = useDispatch()

    const LogOut = () => {
        dispatch(LogoutUser())
    }

    return(
        <button type="button" onClick={LogOut}>LogOut</button>
    )
}