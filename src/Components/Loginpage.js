import React from "react";
import "../Styles/Loginpage.css";
import Button from "@mui/material/Button";
function Loginpage() {
  return (
    <div className="container">
        {/* Left side  */}
       <div className="left-container">
        <div className="content">
            <div className="f-logo">
            <img src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="..." className="logo"></img>
            </div>
            <div className="F-content">
            <p>Facebook helps you connect and share <br/> with the people in your life.</p>
            </div>
        </div>
        </div> 
        {/* Right Side */}
        <div className="right-container">
            <div className="card-container">
                <div className="card-details">
                    <div className="input-filed">
                    <input type="text" name="text" placeholder="Email address or phone number"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    </div>
                    <div className="login-button">
                    <Button variant="contained" className="Button">Log In</Button>
                    </div>
                    <div className="Forgot-text">
                        <a href="#">Forgotten password?</a>
                    </div>
                    <div className="line"></div>

                    <div className="create-button">
                        <button type="button" className="C-A-Button">Create new account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Loginpage;
