import React, { useState } from "react";
import "../Styles/Navbar.css";
// import SearchIcon from '@mui/material/Icon/Search';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { StorefrontOutlined } from "@mui/icons-material";
import { SupervisedUserCircle } from "@mui/icons-material";
import SvgIcon from '@mui/material/SvgIcon';
import { Avatar } from "@mui/material";


function Navbar() {

    const [{user},dispatch] = useStateValue();

    return (
        <div className="header">
            {/* Header is split into 3 areas : center, left & right */}

            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />

                <div className="header_input">
                    <SearchIcon />
                    <input className="search_input" placeholder="Seach Facebook" type="text" />
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
                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                    
            </div>
        </div>
    );
};

export default Navbar;