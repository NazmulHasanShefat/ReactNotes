import React from 'react';
import Navbar from '../components/navbar';
import { useParams } from 'react-router-dom';
const Productpage = () => {
    let { productId , productName} = useParams();
    return (
        <div>
            <Navbar/>
            <h1>this is productpage</h1>
            <p>productName: <span>{productName}</span></p>
            <p>this is the product id is:  <span>{productId}</span></p>
        </div>
    );
};

export default Productpage;