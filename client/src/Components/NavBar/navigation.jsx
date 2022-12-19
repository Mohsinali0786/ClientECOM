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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { socialLinks } from '../SocialLinks/socialLinks.js'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { PrimarySearchAppBar } from '../index'
import { SignUpModal } from '../index';


// import {MenuItem } from '@mui/material';
import { useState } from "react";

const socialicons = [{ icon: <FacebookIcon />, url: socialLinks?.facebook, name: 'Facebook' }, { icon: <InstagramIcon />, url: socialLinks?.instagram, name: 'Instagram' }, { icon: <GitHubIcon />, url: socialLinks?.github, name: 'Github' }, { icon: <LinkedInIcon />, url: socialLinks?.linkedin, name: 'Linkend' }];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const pages = [{ name: 'Home', url: '' }, { name: 'Products', url: '', Items: ["Men", "Women", "Kids"] }, { name: 'About-Us', url: '' }, { name: 'Contact-Us', url: '' }]

function Navigation() {
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


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="h"
                        sx={{
                            mr: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1,

                        }}
                        className='title'
                    >

                        Company Logo

                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="h"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 80,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        className='title'
                    >
                        Company Logo

                    </Typography>

                    <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex', justifyContent: 'space-around' } }}>
                        {pages?.map((page, index) => (
                            <PrimarySearchAppBar navbarLink={page} />
                        ))}
                    </Box>
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
                            PaperProps={{
                                style: {
                                    width: "95%",
                                    maxWidth: "95%",
                                    // left: 0,
                                    // right: 0,
                                }
                            }}
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
                        >
                            {socialicons.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu} >
                                    <a className='navbar-links' href={page.url}>
                                        <span textAlign="center" >{page.icon}</span>
                                        <span className='navbar-link-text'>
                                            {page.name}
                                        </span>
                                    </a>
                                </MenuItem>
                            ))}
                        </Menu>

                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-around' }, }}>
                        {socialicons.map((page, index) => (
                            <a
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href={page.url}
                                style={{ color: 'white' }}
                            >
                                {page.icon}
                            </a>
                        ))}
                    </Box>
                    <SignUpModal />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navigation;