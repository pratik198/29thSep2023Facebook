import { useState, useCallback } from "react";
import Modal from "@netojose/react-modal";
import ReactDOM from "react-dom";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { StorefrontOutlined, SupervisedUserCircle } from "@mui/icons-material";

import { Avatar } from "@mui/material";
import ListItemButton from "@mui/material";
import Typography from "@mui/material";
import Divider from "@mui/material";
import { Settings } from "@mui/icons-material";
import { EmojiFlagsRounded, FeedbackRounded } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

function handleLogout() {
  console.log("clicked");
  localStorage.removeItem("token");
}

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // function handleLogout() {
  //   console.log("clicked");
  //   localStorage.removeItem("token");
  // }
  const habdleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
    }
  };

  const myAvtarr = {
    photoURL:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    displayName: "Pratik",
  };
  const username = localStorage.getItem("userName");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="mui-nav-bar" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Link to={"/main"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
              className="image-nav"
              alt=""
            />
          </Link>
          <Search className="miu-search-bar">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              className="seachInput"
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="header_center">
            <Link to={"/main"} className="header_option header_option--active">
              <HomeIcon fontSize="large" />
            </Link>
            <Link to={"/commingsoon"} className="header_option">
              <FlagIcon fontSize="large" />
            </Link>
            <Link to={"/commingsoon"} className="header_option">
              <SubscriptionsIcon fontSize="large" />
            </Link>
            <Link to={"/commingsoon"} className="header_option">
              <StorefrontOutlined fontSize="large" />
            </Link>
            <Link to={"/commingsoon"} className="header_option">
              <SupervisedUserCircle fontSize="large" />
            </Link>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="#0866FF"
            >
              <Link to={"/commingsoon"}>
                <Badge color="error">
                  <MailIcon />
                </Badge>
              </Link>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="#0866FF"
            >
              <Link to={"/commingsoon"}>
                <Badge color="error">
                  <NotificationsIcon />
                </Badge>
              </Link>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#0866FF"
            >
              <Avatar src={myAvtarr.photoURL} onClick={openModal} />
            </IconButton>

            <section className="modalSection">
              <Modal isOpen={isOpen} onRequestClose={closeModal} className="custom-modal"
        overlayClassName="custom-overlay">
                <p>This is the modal content</p>
                <input type="button" value="Close modal" onClick={closeModal} />
              </Modal>
            </section>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
