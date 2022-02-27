import React, { useRef, useState } from 'react';
import { bool, func } from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

const AppToolbar = ({ isLoggedIn, onLogin, onLogout }) =>{
  const userIconRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const classes = useStyles();

  const handleClickUserMenu = (e) => {
    e.preventDefault();
    setUserMenuOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleCloseUserMenu = (e) => {
    e.preventDefault();
    setUserMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <img
          alt='intelligence bank logo'
          src='/ib-logo.png'
          style={{ width: 48, height: 48, paddingRight: 24 }}
        />
        <Typography variant='h6' className={classes.title}>
          Intelligence Bank Coding Exercise
        </Typography>
        {isLoggedIn ? (
          <>
            <IconButton
              aria-label='user icon'
              aria-controls='user-menu'
              aria-haspopup='true'
              color='inherit'
              onClick={handleClickUserMenu}
              innerref={userIconRef}
              size="large">
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              aria-label='user menu'
              id='user-menu'
              onClose={handleCloseUserMenu}
              open={userMenuOpen}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem aria-label='logout' onClick={onLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : <Button color='inherit' aria-label='login' onClick={onLogin}>Login</Button>}
      </Toolbar>
    </AppBar>
  );
}

AppToolbar.propTypes = {
  isLoggedIn: bool.isRequired,
  onLogout: func.isRequired,
  onLogin: func.isRequired
};

export default AppToolbar;
