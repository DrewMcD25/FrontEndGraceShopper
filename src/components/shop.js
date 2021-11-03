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
        <div class="row">
        <div id="listOfShirts">
            <img src={(`${process.env.PUBLIC_URL}/images/${apparel.name}Front.png`)}
            height="450"
            width="450"/>
            <h1>{apparel.name}</h1>
            <h2>{apparel.price}</h2>
            <select id="Size">
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
                <option value="xlarge">XL</option>
            </select>
            <button onClick={() => handleSubmit(apparel.id)}>Add To Cart</button>
        </div></div>
    );
    return (
        <div id="shop">
            <h1 id="listOfShop">SHOP</h1>
            {shopElement}
        </div>
    )
}

export default Shop