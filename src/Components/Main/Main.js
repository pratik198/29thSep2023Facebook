import React from "react";
import Navbar from "../Navbar";
import Homepage from "../Homepage";
import '../Main/Main.css'
import WhatIsOnUrMind from "../WhatIsOnUrMind";
function Main() {
  return (
    <div>
      <WhatIsOnUrMind/>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default Main;
