import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({ id, title, image, price, rating }) {
    const [{ user, basket, product }, dispatch] = useStateValue()


    const addToBasket = (e) => {
        // dispatch the item into the data layer
        fetch('https://new-amazon-clone.herokuapp.com/addCart',
            {
                method: "put",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({

                    _id: user._id, id, title, image, price, rating
                })
            })
            .then(res => res.json())
            .then(data => {

                dispatch({
                    type: "ADD_TO_BASKET",
                    basket: data.result.cart
                });

            })
    }



    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">


                </div>

            </div>

            <img src={image} alt={title} />
            <button onClick={(e) => addToBasket(e)}> Add to basket</button>
        </div>
    )
}

export default Product
