import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'


const Shop = ({allInv, setAllInv}) => {
        useEffect(async function () {
            fetch('https://serene-stream-31668.herokuapp.com/api/allInv')
                .then(response => response.json())
                .then(result => {
                    setAllInv(result.data.apparel)
                    console.log(result);
                })
                .catch(console.error);
        }, []);
        console.log(allInv);
        const shopElement= allInv.map((apparel) =>
        <div id= "listOfShirts">
            <h1>Color{apparel.name}</h1>
            <h3>Price{apparel.price}</h3>
        </div>
        );
    return (
        <div id="shop">
            <h1 id= "listOfShop"> SHOP</h1>
            {shopElement}
        </div>
    )
}

export default Shop