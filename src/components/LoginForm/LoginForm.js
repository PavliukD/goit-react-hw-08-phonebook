


export default function LoginForm(){


    const onSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        const formdata = new FormData(event)
        console.log(formdata)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>
                <h3>Email</h3>
                <input type="email" />
                <h3>Password</h3>
                <input type="password" />
            </label>

            <button type="submit">LogIn</button>
        </form>
    )
}