// import * as React from 'react';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// export default function PrimarySearchAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>

//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//         <IconButton
//           size="large"
//           aria-label="show more"
//           aria-controls={mobileMenuId}
//           aria-haspopup="true"
//           onClick={handleMobileMenuOpen}
//           color="inherit"
//         >
//             <p >Products</p>
//           {/* <MoreIcon /> */}
//         </IconButton>
//       </Box>
//       {renderMobileMenu}
//     </Box>
//   );
// }



import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'

export default function PrimarySearchAppBar({ navbarLink }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('navbarLink', navbarLink)
  return (
    <div >
      <Link
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={navbarLink.Items ? handleClick : null}
        to=''
        className='navbar-link-colors'

      >
        {navbarLink.name}
      </Link>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {
          navbarLink?.Items ?
            navbarLink?.Items.map((v) => {
              return (
                <MenuItem onClick={handleClose}>
                  <Link to='' className='navbar-sublink-colors'>{v}</Link>
                </MenuItem>

              )
            })
            :
            null
        }
      </Menu>
    </div>
  );
}