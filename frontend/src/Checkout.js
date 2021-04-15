import React from 'react'
import './Checkout.css'
import FlipMove from 'react-flip-move';
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{user, basket }, dispatch] = useStateValue()
    const customEnterAnimation = {
        from: { transform: 'scale(0.5, 1)' },
        to: { transform: 'scale(1, 1)' }
    };
    console.log("basket in checkout>>>", basket)

     const removeBasket = (e, item) => {
       console.log("item selected to remove", item)
       dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: item._id,
        })
      e.preventDefault()
        // dispatch the item into the data layer
         fetch('https://new-amazon-clone.herokuapp.com/removeCart',   
            {method: "put",
             headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              
              _id:user._id,id: item.id, title:item.title,image:item.image,price:item.price,rating:item.rating
            })
     })
     .then(res=> res.json())
     .then(data => {
       console.log("data in remote basket >> ", data)

             dispatch({
            type: "ADD_TO_BASKET",
            basket:data.result.cart
        });
    
       })
   }
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" alt=""
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" />

                <div>
                    <h3>Hello, {user?.email} </h3>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    <FlipMove enterAnimation={customEnterAnimation}>
                        {
                            basket.map(item => (

                                       <div className="checkoutProduct">
                                            <img className="checkoutProduct_image" src={item.image} alt={item.title} />

                                            <div className="checkoutProduct_info">
                                                <p className="checkoutProduct_title">{item.title}</p>
                                                <p className="checkoutProduct_price">
                                                    <small>$</small>
                                                    <strong>{item.price}</strong>
                                                </p>



                                                <div className="checkoutProduct_rating">
                                                  
                                                </div>
                                                
                                                    <button onClick={(e)=> removeBasket(e, item)} >Remove from basket</button>
                                              
                                            </div>
                                        </div >

                                // <CheckoutProduct
                                //     _id={item._id}
                                //     key={item.id}
                                //     id={item.id}
                                //     title={item.title}
                                //     price={item.price}
                                //     image={item.image}
                                //     rating={item.rating}
                                // />
                            ))
                        }
                    </FlipMove>
                </div>

            </div>

              <div className="checkout_right">
                <Subtotal />
            </div>
        </div >
    )
}

export default Checkout
