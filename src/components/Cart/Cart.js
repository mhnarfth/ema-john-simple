import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <h2>Items: {props.cart.length}</h2>
        </div>
    );
};


export default Cart;