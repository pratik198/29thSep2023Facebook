
import React from "react";
import "../Styles/SidebarLeft.css";
import { ExpandMoreOutlined } from "@mui/icons-material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const User = {
  photoURL:
    "https://scontent.fbbi4-1.fna.fbcdn.net/v/t39.30808-6/384470156_621637833475535_5680275089051804810_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hAceM4VMwKMAX_mV2pN&_nc_ht=scontent.fbbi4-1.fna&oh=00_AfA0t1N7_IgPHFr-wkBDtnRylfpFZsrEKwOSPXZ-QcOpfA&oe=655A21FB",
  displayName: "Pratik",
};

function SidebarLeft() {
 
  const username = localStorage.getItem("userName");

  return (
    <div className="SidebarLeft">
      <Link to={"/profile"} className="sidebar-icon">
      <Link to={"/profile"}>
        <div className="abc">
          <Avatar src={User.photoURL} className="a" />
        </div></Link>
        <Link to={"/profile"}>
        <h4>{username}</h4></Link>
      </Link>
      <div className="sidebarRow">
        <LocalHospitalIcon />
        <p className="right-sec">COVID-19 Information Center</p>
      </div>
      <div className="sidebarRow">
        <EmojiFlagsIcon />
        <p className="right-sec">Pages</p>
      </div>
      <div className="sidebarRow">
        <PeopleIcon />
        <p className="right-sec">Friends</p>
      </div>
      <div className="sidebarRow">
        <ChatIcon />
        <p className="right-sec">Messenger</p>
      </div>
      <div className="sidebarRow">
        <StorefrontIcon />
        <p className="right-sec">Marketplace</p>
      </div>
      <div className="sidebarRow">
        <VideoLibraryIcon />
        <p className="right-sec">Videos</p>
      </div>
      <div className="sidebarRow">
        <ExpandMoreOutlined />
        <p className="right-sec">More</p>
      </div>
    </div>
  );
}

export default SidebarLeft;
