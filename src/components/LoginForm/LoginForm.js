import { useState } from "react"
import { useDispatch } from "react-redux"
import { logInUser } from "../../redux/phonebook/phonebook-operations"


export default function LoginForm(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()


    const onSubmit = (event) => {
        event.preventDefault()
        const user = {
            email,
            password
        }
        console.log(user)
        dispatch(logInUser(user))
        setEmail('')
        setPassword('')
    }

    return(
        <form onSubmit={onSubmit}>
            <label>
                <h3>Email</h3>
                <input type="email" onChange={(event) => {setEmail(event.target.value)}} value={email}/>
                <h3>Password</h3>
                <input type="password" onChange={(event) => {setPassword(event.target.value)}} value={password}/>
            </label>

            <button type="submit">LogIn</button>
        </form>
    )
}