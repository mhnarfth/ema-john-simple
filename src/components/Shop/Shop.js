import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getStoredCart} from '../../utilities/fakedb';
import './Shop.css';


const Shop = () => {
    
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res=>res.json())
        .then (data=>setProducts(data))
    } ,[])

    useEffect(()=> {
        if (products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart){
                const addedproduct = products.find(product=> product.key === key);
                
                if (addedproduct) {
                    addedproduct.quantity = savedCart[key];
                    console.log(addedproduct.quantity);
                    storedCart.push(addedproduct); 
                }

            }   
            console.log(storedCart.length);
            setCart(storedCart);
        }
        
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart (newCart);
        addToDb(product.key);
     }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product 
                        key ={product.key}
                        handleAddToCart = {handleAddToCart}
                        product={product} 
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;