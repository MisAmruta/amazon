import React from 'react'
import './Subtotal.css'

import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer'
import { Link, useHistory } from 'react-router-dom'
function Subtotal() {
    const history = useHistory()
    const [{ user, basket, order }, dispatch] = useStateValue();


    const orderNow = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TO_ORDER',
            order: basket.map(item => item)
        }
        )



        history.push('/orders')
    }

    return (
        <>
            {
                user ? (
                    <div className="subtotal">

                        <CurrencyFormat


                            renderText={(value) => (
                                <>
                                    <p>
                                        Subtotal ({basket.length} items) :
                                        <strong>{value}</strong>
                                    </p>
                                    <small className="subtotal_gift">
                                        <input type="checkbox" />
                                        The order contains a gift
                                    </small>
                                </>
                            )}

                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}

                        />

                        <button onClick={(e) => orderNow(e)}>Proceed to Checkout</button>

                    </div>
                ) :
                    null
            }
        </>
    )
}

export default Subtotal
