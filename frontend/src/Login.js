import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [{ user }, dispatch] = useStateValue()
    const setSignin = (e) => {
        e.preventDefault()
        fetch('https://new-amazon-clone.herokuapp.com/signin', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                email,
                password
            })
        })
            .then(res => res.json())
            .then(data => {

                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({
                    type: 'SET_USER',
                    user: data.user
                },
                    {
                        type: 'ADD_TO_BASKET',
                        basket: data.cart
                    }
                )

                history.push('/')
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
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={(e) => setSignin(e)} className="login_signBUtton" >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE conditions for fake use & sale.
                    Please sea our Privacy Notice, our Cookies notice and our Interest Based ads Notice.
                    </p>
                <Link to="/signup">
                    <button className="login_rigisterBUtton">Create your amazon account</button>
                </Link>
            </div>

        </div>
    )
}

export default Login
