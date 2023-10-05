import React, { useState } from "react";
import "../Styles/Navbar.css";

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { StorefrontOutlined, SupervisedUserCircle } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import { NotificationsActive } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Define a function to toggle the dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Define a function to close the dropdown
    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const logout = () => {
        // Implement logout logic here
    };

    return (
        <div className="header">
            {/* Header is split into 3 areas: center, left & right */}
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <div className="header_input">
                    <SearchIcon />
                    <input className="search_input" placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header_option">
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className="header_option">
                    <SupervisedUserCircle fontSize="large"/>
                </div>
            </div>
            <div className="header_right">
                <Avatar src="https://scontent.fbbi1-1.fna.fbcdn.net/v/t39.30808-6/329750281_876225640319997_3973598474329394205_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=r1PdmW_XIkwAX9987Xg&_nc_oc=AQlfif9dhoddyoXdvpPbbKUhpdixp2v5y7aafQAskQ6Ewf2rp5QzDMm3d-peV_FFrDcxy4AhaEnklX4b3XkyRcWm&_nc_ht=scontent.fbbi1-1.fna&oh=00_AfDKEnqNrX9BMTebv3AS56gm_RzgDMITwSP2JcdbIYustw&oe=651F8A81" alt="Avatar" />
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActive/>
                </IconButton>
                <IconButton onClick={toggleDropdown}>
                    <ExpandMoreIcon /> 
                </IconButton>
                {isDropdownOpen && 
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
                }
            </div>
        </div>
    );
}

export default Navbar;
