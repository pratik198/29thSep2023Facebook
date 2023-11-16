import React from "react";
import Navbar from "../Navbar"
import './comming.css'
import { useEffect } from "react";

function Commingsoon(){

    useEffect(()=>{
console.log("comming soon");
    },[])
    return(
        <div className="commingsoon-div">
        <Navbar/>
            <h2>Comming Soon !!</h2>
        </div>
    )
}
export default Commingsoon;