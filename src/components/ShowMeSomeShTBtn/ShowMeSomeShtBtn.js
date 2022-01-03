import { useSelector } from "react-redux"
import { api } from "../../services/api/api"

export default function ShowMeSomeShtBtn(){
  
    const store = useSelector((store) => {return store.auth.loggedIn })

    const Click = () => {
        console.log(store)
        console.dir(api)
    }

    return(
        <button type="button" onClick={Click}>SHOW!!!</button>
    )
}