import React, { useState } from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {removeItemFromCart} from '../CartSlice';
import emptyCartImg from '../assets/logo/5140139.jpg';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.ProductArray);
  const dispatch = useDispatch();

//   console.log(cartProducts);

  const [numberOfItems, setNumberOfItems] = useState(0);

  const increseItemNumber = () => {
    let add = numberOfItems;
    add += 1;
    setNumberOfItems(numberOfItems + 1);
  };

  const decreseItemNumber = () => {
    let sub = numberOfItems;
    sub -= 1;
    setNumberOfItems(numberOfItems - 1);
  };

  const isShowEmptyCartImg = ()=>{
    const emptyCart = document.getElementById('emptyCartSection');
    console.log(emptyCart);
    // if(cartProducts.length === 0){
    //     emptyCart.classList.remove('hidden');
    //     emptyCart.classList.add('block');
    // }else{
    //     emptyCart.classList.remove('block');
    //     emptyCart.classList.add('hidden');
    // }
  }
  isShowEmptyCartImg();

  return (
    <>
      <NavBar />
      <div className=" flex flex-col items-center" id="emptyCartSection">
        <div>
            <img src={emptyCartImg} alt="empty cart image" title="empty cart image" className="h-[70vh]"/>
        </div>
        <div>
            <p className="text-[#120E43] text-4xl font-semibold">Please Add some items to cart</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center sm:grid grid-flow-row grid-cols-3">
        {cartProducts.map((pro) => (
          <div className="flex justify-center items-center bg-[#CAD5E2] w-fit py-7 pl-3 pr-8 m-3 rounded-lg sm:pr-28 sm:pl-10">
            <div>
              <img src={pro.image} alt="product image" className="w-[100px] h-[150px] mr-4 sm:mr-8" />
            </div>
            <div>
              <div>
                <p className="text-[#03203C] text-xl font-semibold mb-2">{pro.name}</p>
                <p className="text-[#03203C] text-lg font-semibold mb-2">{pro.price}</p>
                <div className="flex justify-start items-center mb-2">
                  <button onClick={increseItemNumber} className="bg-[#ffffff] px-2 py-0 rounded-md mr-2">+</button>
                  <p>{numberOfItems}</p>
                  <button onClick={decreseItemNumber} className="bg-[#ffffff] px-2 py-0 rounded-md ml-2">-</button>
                </div>
              </div>
              <div>
                <button className="bg-[#03203C] text-[#CAD5E2] px-3 py-2 rounded-md mr-3">Buy Now</button>
                <button className="bg-[#03203C] text-[#CAD5E2] px-3 py-2 rounded-md " onClick={()=>dispatch(removeItemFromCart(pro.name))}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
