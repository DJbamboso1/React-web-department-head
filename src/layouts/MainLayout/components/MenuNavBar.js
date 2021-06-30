import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { Context } from '../../../App';
import { Redirect } from 'react-router';


function MenuNavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // setAnchorEl(null);
    // localStorage.setItem('auth', JSON.stringify({
    //   login: false,
    //   user: null
    // })),
    // localStorage.setItem('sidebar', !sidebar),
    
  };

  let { auth: { user }, logoutHandle } = useContext(Context);

  const handleLogout = () => {
    // setAnchorEl(null);
    logoutHandle();
    // localStorage.setItem('auth', JSON.stringify({
    //     login: false,
    //     user: null
    //   }));
    
  };

  // let [auth, setAuth] = useState(localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {
  //   login: false,
  //   user: null
  // })

  // if(!user) {
  //   return <Redirect to="/login"/>
  // }

  return (
    <>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        
        {user.name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      // style={{width: 150}}
      // className="dropdown-menu dropdown-menu-end me-lg-3"
      >
        <MenuItem onClick={handleClose} component={Link} to='/profile'>
          {/* <Link to='/#'>Profile</Link> */}
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout} component={Link} to='/login' >
          {/* <Link to='/signIn'>
            Sign out
          </Link> */}    
          Log out
        </MenuItem>
      </Menu>
      
          
    </>
  )
}

export default MenuNavBar
