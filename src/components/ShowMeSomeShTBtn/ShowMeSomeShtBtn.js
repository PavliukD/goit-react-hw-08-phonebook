import { useSelector } from "react-redux"

export default function ShowMeSomeShtBtn(){
  
    const store = useSelector((store) => {return store })

    const Click = () => {
    }

    return(
        <button type="button" onClick={Click}>SHOW!!!</button>
    )
}