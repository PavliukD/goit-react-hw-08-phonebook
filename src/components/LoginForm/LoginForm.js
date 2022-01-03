import { useState } from "react"
import { useDispatch } from "react-redux"
import { logInUser } from "../../redux/phonebook/phonebook-operations"
import s from './LoginForm.module.css'


export default function LoginForm(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()


    const onSubmit = (event) => {
        event.preventDefault()
        if (email === ''){
            alert('Please, enter email')
            return
        }
        if (password ===''){
            alert('Please, enter password')
            return
        }

        const user = {
            email,
            password
        }
        dispatch(logInUser(user))
        setEmail('')
        setPassword('')
    }

    return(
        <form onSubmit={onSubmit} className={s.form}>
            <label>
                <h3>Email</h3>
                <input type="email" onChange={(event) => {setEmail(event.target.value)}} value={email} placeholder="Email" className={s.input}/>
                <h3>Password</h3>
                <input type="password" onChange={(event) => {setPassword(event.target.value)}} value={password} placeholder="Password" className={s.input}/>
            </label>

            <button type="submit" className={s.button}>Login</button>
        </form>
    )
}