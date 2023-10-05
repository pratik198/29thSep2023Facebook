import React, { useState } from 'react';
import '../Styles/Dropdown.css'; // Import your CSS for styling
import Avatar from '@mui/material/Avatar';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const logout = () => {
    // Your logout logic here
  };

  return (
    <div className="dropdown-container">
      <div className={`dropdown-trigger ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <i className="dropdownIcon"></i>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content" onBlur={closeDropdown} tabIndex={0}>
          <div className="dropdown-item">
            <Avatar src="https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg" alt="User Avatar" />
            <div className="dropdown-text">
              <h1>Your Name</h1>
              <p>See your profile</p>
            </div>
          </div>
          <div className="hr" />
          <div className="dropdown-item">
            <FeedbackIcon />
            <div className="dropdown-text">
              <h1>Give Feedback</h1>
              <p>Help us improve</p>
            </div>
          </div>
          <div className="hr" />
          <div className="dropdown-item">
            <SettingsIcon />
            <h1>Settings & Privacy</h1>
          </div>
          <div className="dropdown-item">
            <HelpOutlineIcon />
            <h1>Help & Support</h1>
          </div>
          <div className="dropdown-item">
            <Brightness4Icon />
            <h1>Dark Mode</h1>
          </div>
          <div className="dropdown-item" onClick={logout}>
            <ExitToAppIcon />
            <h1>Log out</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
