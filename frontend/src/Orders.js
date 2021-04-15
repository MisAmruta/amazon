import React, { useEffect, useState } from "react";
import "./Orders.css";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Orders() {
  const [{ order, user }, dispatch] = useStateValue();

  return (
    <div className="orders">
      <h3>Your Orders</h3>
      <div className="orders_order">
        {/* {
                    order.map(order => (
                        <Order order={order} />
                    ))
                } */}

        {order.length > 0 ? (
          <div className="order">
            <p className="order_id">
              Order Id : <small>{user?._id}</small>
            </p>
            {
              order.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  hideButton={true}
                />
              ))
            }
          </div>
        ) : (
          <div className="order">
            <h2> Order is empty </h2>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
