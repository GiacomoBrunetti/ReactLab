import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import NatooraLogo from '../../assets/natoora_logo.jpg';
import { triggerLoginSuccess } from '../../redux/actions/auth';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    // display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: theme.spacing(3)
  },
  inputsContainer: {
    height: '30vh',
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: theme.palette.secondary.light,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    color: theme.palette.secondary.light,
    padding: theme.spacing(2),
  },
  input: {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
  }
}))

function LoginScreen(props) {
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

  const goToForgotPassword = () => props.history.push('/change-password');


  return (
    <Container className={classes.root}>
      <Avatar src={NatooraLogo} alt="logo"/>
      <Box className={classes.inputsContainer}>
        <FormControl className={classes.inputContainer}>
          <TextField
            name="email"
            label="Email"
            value={values.username}
            onChange={handleChange('username')}
          />
        </FormControl>
        <FormControl className={classes.inputContainer}>
          <TextField
            name="password"
            type='password'
            label="Password"
            value={values.password}
            onChange={handleChange('password')}
          />
        </FormControl>
      </Box>
      <Typography variant="body2" color="textSecondary" onClick={goToForgotPassword}>
        I forgot my password.
      </Typography>
      <Button variant='outlined' onClick={handleClick}>
        LOGIN
      </Button>
    </Container>
  )
}


export default React.memo(LoginScreen);