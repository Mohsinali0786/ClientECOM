import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import {myContext} from '../../Container/HomeScreen/Home'
import { useState } from 'react';
import Products from '../../Products/products'

export default function PrimarySearchAppBar({ navbarLink }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [filterdata, setFilterData] = useState()
  const open = Boolean(anchorEl);
  const data=useContext(myContext)
  const {filterType,setFilterType}=data
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectedCategory = (val) => {
    // console.log('navbarLink', data)
    setFilterType(val)
    // const filterdata = Products.filter((v) => v.catageory === val)
    // console.log('filterdata', filterdata)
  }
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
      {/* <myContext.Provider value={filterdata}> */}
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
                    <p onClick={() => selectedCategory(v)} className='navbar-sublink-colors'>{v}</p>
                  </MenuItem>

                )
              })
              :
              null
          }
        </Menu>
      {/* </myContext.Provider> */}
    </div>
  );
}