import React from "react";
import "../Styles/Updatepas.css";
import { Update } from "@mui/icons-material";

function Updatepas() { // Changed the function name to Updatepas
  return (
    <div className="register">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="Facebook Logo"
        className="register__logo"
      />
      <div className="pass-update">
        <div className="head-box">
             <h1>Update password</h1>
        </div>
     
        <div className="hr3" />
        <form className="pass-update-field">
          <div className="row">
            <input
              className="input_field"
              type="text"
              placeholder="name"
            />
            <input
              className="input_field"
              type="email"
              placeholder="Enter your email"
            />
            <input 
                className="input_field"
                type="password"
                placeholder="Current password" 
            />
             <input 
                className="input_field"
                type="password"
                placeholder="New password" 
            />
          </div>

          <div className="center-input">
            <button type="submit" className="register__register">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Updatepas; 
