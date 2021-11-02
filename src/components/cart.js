import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'



const Shop = ({ allInv, setAllInv }) => {
    useEffect(async function () {
        fetch('https://serene-stream-31668.herokuapp.com/api/allInv')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setAllInv(result)

            })
            .catch(console.error);
    }, []);
    console.log(allInv);

    async function handleSubmit(apparelId) {

        try {
            console.log()
            const data = await fetch('https://serene-stream-31668.herokuapp.com/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ apparelId })
            })
            console.log(data)

        } catch (error) {
            console.error(error)

        }

    }

    const shopElement = allInv.map((apparel) =>
        <ul id ="listofCart">
            <li><img src={(`${process.env.PUBLIC_URL}/images/${apparel.name}Front.png`)}
            height="300"
            width="300"/>
            <h1>{apparel.name}</h1>
            <h2>{apparel.price}</h2></li>
        </ul>
    );
    return (
        <div id="cart">
            <h1 id="listOfShop"> Shopping Cart</h1>
            {shopElement}
            <text id="totalCost">Total - $120</text>
            <button id ="checkoutButton">Checkout</button>
        </div>
    )
}

export default Shop