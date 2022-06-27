import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const pages = [["Home", "/"], ["About", "/about"], ["Members", "/members"], ["FAQ", "/faq"], ["Performances", "/performances"]];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        console.log('clicked')
        setAnchorElNav(null);
        window.scrollTo(0, 0, 'smooth');
        window.scrollTo({
            top: 400,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                background: { xs: "transparent", md: 'rgba(32,30,31,0.85)' },
                boxShadow: "none",
                height: { xs: 50, md: 60 }
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" }
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{
                                color: "#FEEFDD",
                                marginLeft: '80vw'
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                                margin: "0",
                                padding: "0",
                                backgroundColor: "transparent"
                            }}
                        >
                            {pages.map((page) => (
                                <Link to={page[1]} style={{ fontFamily: 'Fira Sans', textDecoration: 'none', color: '#201E1F' }}>
                                    <MenuItem
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ color: "#FF4000", margin: "0" }}
                                    >
                                        <Typography textAlign="center" sx={{ color: '#201E1F', width: "100vw", fontFamily: "Fira Sans" }}>
                                            {page[0]}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center"
                        }}
                    >
                        {pages.map((page) => (
                            <Link to={page[1]} style={{ fontFamily: 'Fira Sans', textDecoration: 'none', color: '#FEEFDD' }} onClick={handleCloseNavMenu}>
                                <Button
                                    key={page}

                                    sx={{
                                        my: 1,
                                        color: "white",
                                        display: "block",
                                        mr: 7,
                                        fontSize: 18,
                                        fontFamily: "Fira Sans",
                                    }}
                                >
                                    <Typography textAlign="center" sx={{ fontFamily: "Fira Sans", color: '#FEEFDD' }}>
                                        {page[0]}</Typography>
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;