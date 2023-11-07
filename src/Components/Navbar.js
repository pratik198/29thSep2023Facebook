// import ListItem from "@mui/material";


import {
  Avatar,
  Divider,
  ListItemButton,
} from "@mui/material";
import { ListItem } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import { EmojiFlagsRounded } from "@mui/icons-material";
import { FeedRounded } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";


import { useState } from "react";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Modal } from "@mui/material";
import { UserMap } from "./Datastore";

import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "../Styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import { StorefrontOutlined, SupervisedUserCircle } from "@mui/icons-material";
import { useAuth } from "./Context";
import { toBeChecked } from "@testing-library/jest-dom/matchers";
// import SearchIcon from '@mui/icons-material/Search';
// const navigate = useNavigate();

const menuId = "primary-search-account-menu";

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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const navigate = useNavigate();

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const userIdForNav = localStorage.getItem("userId");

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        {/* <Link to="/"> */}
        <button onClick={handleLogout}>Profile</button>
        {/* </Link> */}
      </MenuItem>
    </Menu>
  );
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // function handleLogout() {
  //   console.log("clicked");
  //   localStorage.removeItem("token");
  // }
  const habdleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
    }
  };

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
            //  value={searchQuery}
            //  onChange={handleInputChange}
            //  onKeyDown={(e) => {
            //    if (e.key === "Enter") {
            //      handleSearch();
            //    }
            //  }}
            />
          </Search>
          <div className="header_center">
            <div className="header_option header_option--active">
              <HomeIcon fontSize="large" />
            </div>
            <div className="header_option">
              <FlagIcon fontSize="large" />
            </div>
            <div className="header_option">
              <SubscriptionsIcon fontSize="large" />
            </div>
            <div className="header_option">
              <StorefrontOutlined fontSize="large" />
            </div>
            <div className="header_option">
              <SupervisedUserCircle fontSize="large" />
            </div>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="#0866FF"
            >
              <Badge color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="#0866FF"
            >
              <Badge color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#0866FF"
            >
              {/* <Link to="/">
                <AccountCircle onClick={handleLogout} />
              </Link> */}
            </IconButton>
            <section className="modalSection">
              <Modal
                className="modalAcountIcon"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <section>
                  <Box className="modalBox">
                    <div>
                      <Box className="boxUser">
                        <ListItemButton>
                          <Link to={"/profile"} className="black-link">
                            <div className="acountData">
                              {UserMap.get(userIdForNav) && (
                                <Avatar sx={{ width: 30, height: 30 }} src={UserMap.get(userIdForNav)?.photo}></Avatar>
                              )}
                              <Typography>{UserMap.get(userIdForNav)?.name}</Typography>

                            </div>
                          </Link>
                        </ListItemButton>
                        <Divider />
                        <ListItemButton className="seeAllListButton">
                          <div className="SeeAll">
                            <Typography>See all profile</Typography>
                          </div>
                        </ListItemButton>
                      </Box>
                    </div>

                    <div className="modalList">
                      <div className="listItemProfile">
                        <ListItemButton>
                          <Settings />
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            role="button"
                          >
                            Settings & privacy
                          </Typography>
                        </ListItemButton>
                      </div>
                      <div className="listItemProfile">
                        <Link to={"/createPage"} className="black-link">
                          <ListItemButton>
                            <EmojiFlagsRounded />
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                              role="button"
                            >
                              Page
                            </Typography>
                          </ListItemButton>
                        </Link>
                      </div>
                      <div className="listItemProfile">

                        <ListItemButton>
                          <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                            role="button"
                          >
                            Display & accessibility
                          </Typography>
                        </ListItemButton>


                      </div>
                      <div className="listItemProfile">
                        <Link to={"/updatePassword"} className="black-link">
                          <ListItemButton>
                            <FeedRounded />
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                              role="button"
                            >
                              Update Password
                            </Typography>
                          </ListItemButton>
                        </Link>
                      </div>
                      <div
                        className="listItemProfile"
                        onClick={habdleLoginLogout}
                      >
                        <Link to="/" className="black-link">
                          <ListItem>
                            <Logout />
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                              role="button"
                            >
                              {isLoggedIn ? "Logout" : "Login"}
                            </Typography>
                          </ListItem>
                        </Link>


                      </div>
                    </div>
                  </Box>
                </section>

              </Modal>
            </section>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

