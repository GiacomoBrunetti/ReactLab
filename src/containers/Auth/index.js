import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

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

function LoginScreen() {
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
    <Container maxWidth='xl' display='flex' className={classes.root}>
      <Box className={classes.inputContainer}>
        <FormControl flex={1}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            name="email"
            label="Email"
            required
            value={values.username}
            onChange={handleChange('username')}
          />
        </FormControl>
        <FormControl flex={1}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            label="Password"
            type='password'
            required
            value={values.password}
            onChange={handleChange('password')}
          />
        </FormControl>
      </Box>
      <Button variant='outlined' onClick={handleClick}>
        LOGIN
      </Button>
    </Container>
  )
}


export default React.memo(LoginScreen);