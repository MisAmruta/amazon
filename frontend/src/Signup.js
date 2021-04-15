import React, { useState } from 'react'
import './Signup.css'
import { Link, useHistory } from 'react-router-dom'

function Signup() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const setSignup = (e) => {
        e.preventDefault()
        fetch('https://new-amazon-clone.herokuapp.com/signup', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then(res => res.json())
            .then(data => {

                history.push('/login')
            })
    }


    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdg0kej_veLtw5BbXu9WM6Ps1EXKPfbW4f_RLdECT8PGbbDs&s'
                    alt='' />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Name</h5>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={(e) => setSignup(e)} className="login_signBUtton" >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE conditions for fake use & sale.
                    Please sea our Privacy Notice, our Cookies notice and our Interest Based ads Notice.
                    </p>
                <Link to='/login'>
                    <button className="login_rigisterBUtton">Already have a account?</button>
                </Link>
            </div>

        </div>
    )
}

export default Signup
