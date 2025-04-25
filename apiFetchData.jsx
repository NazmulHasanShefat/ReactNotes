import React, { useEffect, useState } from 'react';
import Topnav from '../components/Topnav';
import axios from 'axios'


const Homepage = () => {
    let [myproducts,Setproducts] = useState([])

    useEffect(()=>{
        // fetch("https://dummyjson.com/products")
        // .then(res => res.json())
        // .then(json => Setproducts(json));
       async function fetchproduct(){
           let response = await axios.get("https://dummyjson.com/products")
           Setproducts(response.data.products)
        //    console.log(response.data)
        }
        fetchproduct();
    },[])

    
    return (
        <div>
            <Topnav/>
            <div className="mt-5 pt-5 hero d-flex justify-content-center align-items-center flex-column primary-font">
                <div className="hero-heading w-75 text-center">
                    <h1 className='primary-font bl-font-samibold lrg-font'>Multipurpose React / Next.js / Bootstrap 5 E-Commerce Template</h1>
                </div>
                <div className="hero-description fs-5 padding-lg text-center">
                   <p className='text-secondary'>Unlock the potential of your online business with our premium e-commerce front-end template, carefully crafted on the latest frameworks.</p>
                </div>
            </div>
            {/* <div className="products row justify-content-start m-0" style={{width:"100%", height:"500px"}}>
                <div className="product col-md-3 col-sm-12 py-2 px-2">
                   
                    <div className="product-card p-3 shadow-lg rounded" style={{width:"100%",height:"max-content"}}>
                       <div className="product-rating fs-5 d-flex justify-content-between align-items-center">
                        <p>5 ster</p>
                        <p>*****</p>
                       </div>
                       <div className="product-image text-center">
                         <img src="/images/01.webp" height="100px" width="100px" alt="" />
                       </div>
                       <div className="product-name text-center" style={{fontSize:"1.1rem"}}>
                          <p>Bed frame light gray 140x200 cm</p>
                       </div>
                       <div className="product-price text-center">
                         <p>200%</p>
                       </div>
                       <div className="cart-btn text-center">
                          <button type='button' className='btn btn-success'>Add to cart</button>
                       </div>
                    </div>
                </div>
                
            
            </div> */}

<div className="products row justify-content-start m-0" style={{width:"100%", height:"500px"}}>
          {
            myproducts.map((elem,index)=>{
                console.log(elem)
                return(
                <div className="product col-md-3 col-sm-12 py-2 px-2" id={index} key={index}>
                   
                    <div className="product-card p-3 shadow-lg rounded" style={{width:"100%",height:"max-content"}}>
                       <div className="product-rating fs-5 d-flex justify-content-between align-items-center">
                        <p>5 ster</p>
                        <p>*****</p>
                       </div>
                       <div className="product-image text-center">
                         <img src={elem.images[0]} height="100px" width="100px" alt="" />
                       </div>
                       <div className="product-name text-center" style={{fontSize:"1.1rem"}}>
                          <p>{elem.title}</p>
                       </div>
                       <div className="text-center" style={{fontSize:".8rem"}}>
                          <p>{elem.description}</p>
                       </div>
                       <div className="product-price text-center fs-4">
                         <p>{elem.price} TK </p>
                       </div>
                       <div className="cart-btn text-center">
                          <button type='button' className='btn btn-success'>Add to cart</button>
                       </div>
                    </div>
                </div>
                
            
            )
        })
    }
    </div>

        </div>
    );
};

export default Homepage;