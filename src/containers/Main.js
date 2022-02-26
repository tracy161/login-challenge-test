import React from 'react';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { SESSION_ACTIONS } from '../actions/types';
import MuiAlert from '@mui/material/Alert';

import AppToolbar from '../components/AppToolbar';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Main = ({ isLoggedIn, logout, push }) => {
  const handleLogin = () => {
    push('/login');
  };

  return (
    <>
      <AppToolbar
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={logout}
      />
      {isLoggedIn && (
        <Alert severity="success" style={{ bottom: '0' }}>
          Success!
        </Alert>
      )}
    </>
  );
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

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(SESSION_ACTIONS.LOGOUT),
    push: path => dispatch(push(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
