import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../ProductSlice";

const ProductCard = ({ img, name, price, category }) => {
  const dispatch = useDispatch();
  const [productImage, setImage] = useState(img);
  const [productName, setName] = useState(name);
  const [productPrice, setPrice] = useState(price);
  const [productCatgory, setCatgory] = useState(category);

  // console.log(img, name, price, category);

  // const addProductInStor = ()=>{
  //     dispatch(addProduct(img,name,price,category));
  // }
  // addProductInStor();

  // let saidHello = false;

  // function sayHello() {
  //   dispatch(
  //     addProduct([productImage, productName, productPrice, productCatgory])
  //   );
  //   saidHello = true;
  // }

  // function helloOnce() {
  //   if (!saidHello) sayHello();
  // }

  // helloOnce();

  dispatch(
    addProduct([productImage, productName, productPrice, productCatgory])
  );


  return (
    <div className="flex flex-col items-center justify-center border rounded-md shadow-2xl w-fit  p-5 m-4 z-1 hover:scale-110 transition duration-700 ease-in-out sm:my-6">
      <div>
        <img className="w-[200px] h-[250px]" src={img} alt="img" />
      </div>
      <div className="p-3 flex flex-col items-center">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#FB641B] text-[#ffffff] py-3 px-5 font-semibold mr-5">
          Buy Now
        </button>
        <button className="bg-[#FF9F00] text-[#ffffff] py-3 px-5 font-semibold" id="addToCart">
          Add To cart
        </button>
        {/* <button className="bg-[#ae2f0f] text-[#ffffff] py-3 px-5 font-semibold" id="addedToCart">
          Added To cart
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
