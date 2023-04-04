import React from "react";
import NavBar from "./NavBar";

const Home = ()=>{
    return(
       <>
       <NavBar />
       <p>Home</p>
       <button className="bg-[#E07C24] text-[#fff] fixed bottom-5 left-100 right-5 px-5 py-2 rounded-md font-semibold text-xl">Add item</button>
       </>
    )
}

export default Home;