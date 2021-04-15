import React, { useEffect } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
    const [{ user, basket }, dispatch] = useStateValue()
    // useEffect(()=>{
    //    fetch('http://localhost:5000/getCart/user._id',   
    //         {method: "get",
    //          headers: {
    //             "Content-Type": "application/json"
    //         }
    //  })
    //  .then(res=> res.json())
    //  .then(data => {
    //    console.log("data in useEffect",data)

    //          dispatch({
    //         type: "ADD_TO_BASKET",
    //         basket:data
    //     });

    //    })
    // }, [])


    const removeBasket = (e) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
        e.preventDefault()
        // dispatch the item into the data layer
        fetch('https://new-amazon-clone.herokuapp.com/removeCart',
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
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt={title} />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>



                <div className="checkoutProduct_rating">

                </div>
                {!hideButton &&
                    (<button onClick={removeBasket}>Remove from basket</button>)
                }

            </div>
        </div >
    )
}

export default CheckoutProduct