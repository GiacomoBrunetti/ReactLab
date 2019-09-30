import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainContainer from './containers/MainContainer';
// import logo from './logo.svg';
import './App.css';

const useStyles = makeStyles({
  root: {
    // flexBasis: 'auto',
    // flexFlow: 'column',
    // height: '100%',
    // backgroundColor: 'black',
  },
});

function App() {
  const classes = useStyles()
  return (
    <MainContainer display="flex" flexDirection="column" className={classes.root}/>
  );
}

export default App;
