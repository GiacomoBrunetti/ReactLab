import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import AuthNavigation from '../../navigation/AuthNavigation';
// import Login from '../../components/Login';
// import ChangePassword from '../../components/ChangePassword';
import { triggerLoginSuccess } from '../../redux/actions/auth';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    // flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputContainer: {
    height: '30vh',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    color: theme.palette.primary.light,
  }
}))

function AuthContainer() {
  const classes = useStyles();

  const [values, setValues] = useState({
    username: '',
    password: ''
  })
  const dispatch = useDispatch();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClick = () =>  dispatch(triggerLoginSuccess({ token: '#442',  }));

  return (
    <AuthNavigation />
  )
}


export default React.memo(AuthContainer);