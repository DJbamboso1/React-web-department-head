import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { Context } from '../../../App';



function MenuNavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let { auth: { user } } = useContext(Context)




  return (
    <>
      {/* <div className="menu-item dropdown">
        <a href="#" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
          <div className="menu-img online">
            <img src="assets/img/user/user.jpg" alt="" className="mw-100 mh-100 rounded-circle" />
          </div>
          <div className="menu-text"><span className="__cf_email__" data-cfemail="80f3e5e1eef4e8e5ede5c0e7ede1e9ecaee3efed">[email&nbsp;protected]</span></div>
        </a>
        <div className="dropdown-menu dropdown-menu-end me-lg-3">
          <a className="dropdown-item d-flex align-items-center" href="#">Edit Profile <i className="fa fa-user-circle fa-fw ms-auto text-gray-400 fs-16px" /></a>

          <div className="dropdown-divider" />
          <a className="dropdown-item d-flex align-items-center" href="#">sign Out <i className="fa fa-toggle-off fa-fw ms-auto text-gray-400 fs-16px" /></a>
        </div>
      </div> */}

      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {/* <div className="menu-text"><span className="__cf_email__" data-cfemail="80f3e5e1eef4e8e5ede5c0e7ede1e9ecaee3efed">[email&nbsp;protected]</span></div> */}
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
        <MenuItem onClick={handleClose} component={Link} to='/#'>
          {/* <Link to='/#'>Profile</Link> */}
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/signIn'>
          {/* <Link to='/signIn'>
            Sign out
          </Link> */}
          Sign out
        </MenuItem>
      </Menu>

    </>
  )
}

export default MenuNavBar
