import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MuiAlert from '@mui/material/Alert';

import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { login, clearUser } from '../../actions/session';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const LogIn = ({ login, clearUser, isLoggedInFailed }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [formDataUserError, setFormDataUserError] = useState({
    error: false,
    dataError: '',
  });

  const [formDataPassError, setFormDataPassError] = useState({
    error: false,
    dataError: '',
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (username === '') {
      setFormDataUserError({
        error: true,
        dataError: '* Username is required',
      });
    }
    if (password === '') {
      setFormDataPassError({
        error: true,
        dataError: '* Password is required',
      });
    }

    if (username && password) {
      login(username, password);
    }
  };

  const clearInput = e => {
    e.preventDefault();
    document.getElementById('login-form').reset();
    clearUser();
    setFormData({
      username: '',
      password: '',
    });
    setFormDataUserError({
      error: false,
      dataError: '',
    });
    setFormDataPassError({
      error: false,
      dataError: '',
    });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Please Log In Below
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            id="login-form"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              aria-label="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={e => onChange(e)}
              error={formDataUserError.error}
              helperText={formDataUserError.dataError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              aria-label="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => onChange(e)}
              error={formDataPassError.error}
              helperText={formDataPassError.dataError}
              InputLabelProps={{ shrink: true }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              aria-label="button"
            >
              Log in
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={e => clearInput(e)}
            >
              Reset
            </Button>
          </Box>
        </Box>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {isLoggedInFailed === false && (
            <Alert severity="error" style={styleAlert}>
              Login Failure!
            </Alert>
          )}
        </div>
      </Container>
    </>
  );
};

const styleAlert = {
  bottom: '20px',
  position: 'fixed',
  width: '23rem',
  justifyContent: 'center',
};

LogIn.propTypes = {
  isLoggedInFailed: bool,
  login: func,
  clearUser: func,
};

const mapStateToProps = state => {
  return {
    isLoggedInFailed: state.getIn(['session', 'isAuthenticated']),
  };
};

export default connect(mapStateToProps, { login, clearUser })(LogIn);
