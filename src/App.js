import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import MainContainer from './containers/MainContainer';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#ddd' },
  },
});

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
    <ThemeProvider theme={theme}>
      <MainContainer display="flex" flexDirection="column" className={classes.root}/>
    </ThemeProvider>
  );
}

export default App;
