import React, { useState } from 'react'
import './SellProduct.css'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function SellProduct() {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')
    const [{ user }, dispatch] = useStateValue()

    const setProduct = (e) => {
        e.preventDefault()
        fetch('https://new-amazon-clone.herokuapp.com/setProducts', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: user._id, title, image, price, rating
            })
        })
            .then(res => res.json())
            .then(data => {
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
                <h1>Sell Product</h1>

                <form>
                    <h5>Title</h5>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <h5>Image</h5>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                    <h5>Price</h5>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <h5>Rating</h5>
                    <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
                    <button type="submit" onClick={(e) => setProduct(e)} className="login_signBUtton" >Add Prduct</button>
                </form>

            </div>

        </div>
    )
}

export default SellProduct
