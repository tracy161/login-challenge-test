import React from 'react';
import MuiAlert from '@mui/material/Alert';
import Container from '@mui/material/Container';

import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { logout } from '../actions/session';
import AppToolbar from '../components/AppToolbar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Main = ({ isLoggedIn, logout, push }) => {
  const handleLogin = () => {
    push('/login');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <AppToolbar
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <Container component="main" maxWidth="xs">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {isLoggedIn && (
            <Alert severity="success" style={styleAlert}>
              Login Success!
            </Alert>
          )}
        </div>
      </Container>
    </>
  );
};

const styleAlert = {
  bottom: '20px',
  width: '20rem',
  position: 'fixed',
  justifyContent: 'center',
};

Main.propTypes = {
  isLoggedIn: bool.isRequired,
  logout: func.isRequired,
  push: func.isRequired,
};

const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.getIn(['session', 'username']),
  };
};

export default connect(mapStateToProps, { logout, push })(Main);
