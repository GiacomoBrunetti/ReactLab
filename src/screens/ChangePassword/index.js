import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackRounded from '@material-ui/icons/ArrowBackRounded';

import { triggerPasswordChangeRequest } from '../../redux/actions/auth';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    // flexGrow: 1,
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
    flexDirection: 'column',
    textAlign: 'center',
    color: theme.palette.secondary.light,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    color: theme.palette.secondary.light,
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },
  input: {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(2),
  }
}))

function ChangePasswordScreen(props) {
  const classes = useStyles();

  const [values, setValues] = useState({
    old: '',
    new: '',
    confirm: ''
  })
  const dispatch = useDispatch();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClick = () =>  dispatch(triggerPasswordChangeRequest({...values}));

  const handleBack = () => props.history.goBack();

  return (
    <Container className={classes.root}>
    <IconButton edge="start" color="inherit" onClick={handleBack} aria-label="close">
      <ArrowBackRounded />
    </IconButton>
      <Box className={classes.inputsContainer}>
        <FormControl flex={1} className={classes.inputContainer}>
          <TextField
            name="old"
            type='password'
            label="Old Password"
            value={values.username}
            onChange={handleChange('old')}
          />
        </FormControl>
        <FormControl flex={1} className={classes.inputContainer}>
          <TextField
            name="new"
            type='password'
            label="New Password"
            value={values.password}
            onChange={handleChange('new')}
          />
        </FormControl>
        <FormControl flex={1} className={classes.inputContainer}>
          <TextField
            name="confirm"
            type='password'
            label="Confirm Password"
            value={values.password}
            onChange={handleChange('confirm')}
          />
        </FormControl>
      </Box>
      <Button variant='outlined' onClick={handleClick}>
        SUBMIT
      </Button>
    </Container>
  )
}


export default React.memo(ChangePasswordScreen);