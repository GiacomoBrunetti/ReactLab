import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import MainContainer from './containers/MainContainer';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#ddd'
    },
    secondary: {
      main: '#ddd'
    },
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainContainer display="flex" flexDirection="column" className={classes.root}/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
