import { useSelector } from "react-redux"

export default function Menu(){

    const logged = useSelector((store) => {return store.auth.loggedIn})

    return(
        
    )
}