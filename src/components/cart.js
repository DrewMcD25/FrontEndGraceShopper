import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'

const Cart =({ cart, setCart }) => {
        useEffect(async function () {
            fetch('https://serene-stream-31668.herokuapp.com/api/cart')
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setCart(result)
    
                })
                .catch(console.error);
        }, []);
        console.log(cart);

        const cartElement = cart.map((cart)=>
        <div id= "cartItems">
            <img src="./components/images/{apparel.image}"/>
            <h1>{apparel.name}</h1>
            <h2>{apparel.price}</h2>
            <h2>{apparel.size}</h2>


            <button>Checkout</button>

        </div>
        )
    return (
        <div id ="cart">
            <h1 id= "myItems">Cart</h1>
            {cartElement}
        </div>
    )
}

export default Cart