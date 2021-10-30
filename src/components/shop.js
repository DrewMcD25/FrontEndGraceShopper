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
    const shopElement = allInv.map((apparel) =>
        <div id="listOfShirts">
            <img src="./style/{apparel.image}"/>
            <h1>{apparel.name}</h1>
            <h2>{apparel.price}</h2>
            <select id="ATC">
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
                <option value="xlarge">XL</option>
            </select>
            <button>Add To Cart</button>
        </div>
    );
    return (
        <div id="shop">
            <h1 id="listOfShop"> SHOP</h1>
            {shopElement}
        </div>
    )
}

export default Shop