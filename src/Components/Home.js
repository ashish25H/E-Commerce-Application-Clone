import React from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import mobile1 from "../assets/images/mobile1.webp";
import mobile2 from "../assets/images/mobile2.webp";
import mobile3 from "../assets/images/mobile3.webp";
import mobile4 from "../assets/images/mobile4.webp";
import mobile5 from "../assets/images/mobile5.webp";
import mobile6 from "../assets/images/mobile6.webp";
import laptop1 from "../assets/images/laptop1.webp";
import tShirt1 from "../assets/images/t-shirt1.webp";
import toy1 from "../assets/images/toy1.webp";
import washingMashine from "../assets/images/washingMashine1.webp";
import chair1 from "../assets/images/chair1.webp";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      {/* <p>Home</p>
       <button className="bg-[#E07C24] text-[#fff] fixed bottom-5 left-100 right-5 px-5 py-2 rounded-md font-semibold text-xl">Add item</button> */}
      <div className="flex flex-col items-center sm:grid grid-rows-4 grid-cols-3 gap-4 justify-center justify-items-center">
        <ProductCard
          img={mobile1}
          name="Mobile1"
          price="10000.00"
          category="Mobile"
        />
        <ProductCard
          img={mobile2}
          name="Mobile2"
          price="15000.00"
          category="Mobile"
        />
        <ProductCard
          img={mobile3}
          name="Mobile3"
          price="12000.00"
          category="Mobile"
        />
        <ProductCard
          img={mobile4}
          name="Mobile4"
          price="11000.00"
          category="Mobile"
        />
        <ProductCard
          img={mobile5}
          name="Mobile5"
          price="19000.00"
          category="Mobile"
        />
        <ProductCard
          img={mobile6}
          name="Mobile6"
          price="17000.00"
          category="Mobile"
        />

        <ProductCard
          img={laptop1}
          name="Laptop1"
          price="130000.00"
          category="Laptop"
        />
        <ProductCard img={toy1} name="Toy1" price="130.00" category="Toy" />
        <ProductCard
          img={washingMashine}
          name="Washing Mashine"
          price="20000.00"
          category="Appliances"
        />
        <ProductCard
          img={tShirt1}
          name="T-Shirt1"
          price="1500.00"
          category="Fashion"
        />
        <ProductCard
          img={chair1}
          name="Chair"
          price="15000.00"
          category="Furniture"
        />
      </div>
    </div>
  );
};

export default Home;
