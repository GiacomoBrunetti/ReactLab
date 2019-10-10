import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import AuthContainer from '../Auth';
import MainContainer from '../MainContainer';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    flexGrow: 1
  }
})

function AppContainer() {


  const classes = useStyles()
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  // console.log('render AppContainer', loggedIn)
  const selectedRender = () => {
    return loggedIn ? <MainContainer /> : <AuthContainer/>;
  }
  return (
    <Container fixed maxWidth="xl" className={classes.root}>
      {selectedRender()}
    </Container>
  )
  // return (<MainContainer/>)
}

export default React.memo(AppContainer);


