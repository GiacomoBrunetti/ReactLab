import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import AuthContainer from '../Auth';
import AppContainer from '../AppContainer';


const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    flexGrow: 1
  }
})

function RootContainer() {


  const classes = useStyles()
  const loggedIn = useSelector(state => state.authReducer.loggedIn);
  const selectedRender = () => {
    return loggedIn ? <AppContainer /> : <AuthContainer/>;
  }
  return (
    <div className={classes.root}>
      <AppContainer />
    </div>
  )
  // return (<MainContainer/>)
}

export default React.memo(RootContainer);


