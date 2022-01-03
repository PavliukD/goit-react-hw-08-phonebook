import { useState } from "react"
import { useDispatch } from "react-redux"
import { signUpUser } from "../../redux/phonebook/phonebook-operations"

export default function SignUpForm(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault()
        const user = {
            name,
            email,
            password,
        }
        dispatch(signUpUser(user))
        setName('')
        setEmail('')
        setPassword('')
    }

    return(
        <form onSubmit={onSubmit}>
            <label>
                <h3>Name</h3>
                <input type='text' onChange={(event) => {setName(event.target.value)}} value={name}/>
                <h3>Email</h3>
                <input type="email" onChange={(event) => {setEmail(event.target.value)}} value={email}/>
                <h3>Password</h3>
                <input type="password" onChange={(event) => {setPassword(event.target.value)}} value={password}/>
            </label>

            <button type="submit">SignUp</button>
        </form>
    )
}