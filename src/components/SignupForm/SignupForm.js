import { useState } from "react"
import { useDispatch } from "react-redux"
import { signUpUser } from "../../redux/phonebook/phonebook-operations"
import s from './SignupForm.module.css'

export default function SignUpForm(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault()
        if (name === ''){
            alert('Please, enter name')
            return
        }
        if (email === ''){
            alert('Please, enter email')
            return
        }
        if (password ===''){
            alert('Please, enter password')
            return
        }

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
        <form onSubmit={onSubmit} className={s.form}>
            <label>
                <h3>Name</h3>
                <input type='text' onChange={(event) => {setName(event.target.value)}} value={name} className={s.input} placeholder="Name"/>
                <h3>Email</h3>
                <input type="email" onChange={(event) => {setEmail(event.target.value)}} value={email} className={s.input} placeholder="Email"/>
                <h3>Password</h3>
                <input type="password" onChange={(event) => {setPassword(event.target.value)}} value={password} className={s.input} placeholder="Password"/>
            </label>

            <button type="submit" className={s.button}>SignUp</button>
        </form>
    )
}