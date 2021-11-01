import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'

const Cart =({ cart, setCart }) => {
        useEffect(async function () {
            console.log(cart)
            fetch('https://serene-stream-31668.herokuapp.com/api/cart/id')
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    setCart(result)
    
                })
                .catch(console.error);
        }, []);

        async function handleSubmit(event){
            event.preventDefault()
            delete {cartElement}
            alert('THANKS FOR SHOPPING WITH US')

        }

        const cartElement = cart.map((apparel)=>
        <div id= "cartItems">
            <img src={(`${process.env.PUBLIC_URL}/images/${apparel.name}Front.png`)}
            height="300"
            width="300"/>
            <h1>{apparel.name}</h1>
            <h2>{apparel.price}</h2>
            <h2>{apparel.size}</h2>
            <div>
            <button onClick={()=> handleSubmit()}>Checkout</button> 
            </div>

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