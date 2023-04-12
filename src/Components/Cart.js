import React from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
const Cart = ()=>{

    const cartProducts = useSelector((state)=>state.cart.ProductArray);
    console.log(cartProducts);
    

    return(
        <>
        <NavBar />
        
        
        </>
    )
}

export default Cart;