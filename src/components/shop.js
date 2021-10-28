import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'

const Shop = ({apparelList, setapparelList}) => {
        useEffect(async function () {
            fetch('https://serene-stream-31668.herokuapp.com/api/apparel')
                .then(response => response.json())
                .then(result => {
                    setApparelList(result.data.posts)
                    console.log(result);
                })
                .catch(console.error);
        }, []);
    return (
        <div id ="shop">
            <h1>SHOP</h1>
        </div>
    )
}

export default Shop