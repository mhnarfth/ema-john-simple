import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price, seller, shipping, star, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className='btn-regular' onClick={() => props.handleAddToCart(props.product)}>add to cart</button>
            </div>
        </div>
    );
};

export default Product;