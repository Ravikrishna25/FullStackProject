
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import "./Nav.css"
import { Link } from "react-router-dom"


import auth from "../firebase_config.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const pages = ['Articles', 'About Us', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className='Nav'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalPoliceIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: "blue " }} size={"large"} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            CrimeFit
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}

              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              className='page'
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" style={{ color: '#3964C3' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalPoliceIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CrimeFit
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#3964C3', display: 'block', fontSize: "16px" }}
                className='page'
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>


            <div>
              {/* <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                style={{ color: "black" }}
                onClick={handleClick}>
                Account
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                  My account
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    signOut(auth);
                    navigate("/", { replace: "true" });
                  }}>
                  Logout
                </MenuItem>
              </Menu> */}
               {/* {!window.sessionStorage.getItem('jwt') ?  */}
            
            
              <Link to="/admin">

                <Button size={"large"} style={{ width: "120px", height: "50px" }}  >
                  <Typography style={{ color: "black", fontSize: "20px" }}>

                    Admin
                  </Typography>
                </Button>
              </Link>
            {/* : */}
              {/* <Link to="/admin/ele1">

                <Button size={"large"} style={{ width: "120px", height: "50px" }}  >
                  <Typography style={{ color: "black", fontSize: "20px" }}>

                    Admin
                  </Typography>
                </Button>
              </Link> */}
             

    {/* } */}
              <Link to="/login">

              <Button size={"large"} style={{ width: "120px", height: "50px" }}  >
                  <Typography style={{ color: "black", fontSize: "20px" }}>

                    Login
                  </Typography>
                </Button>
              </Link>
            </div>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;