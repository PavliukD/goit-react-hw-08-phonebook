

export default function SignUpForm(){


    return(
        <form>
            <label>
                <h3>Name</h3>
                <input type='text' />
                <h3>Email</h3>
                <input type="email" />
                <h3>Password</h3>
                <input type="password" />
            </label>

            <button>SignUp</button>
        </form>
    )
}