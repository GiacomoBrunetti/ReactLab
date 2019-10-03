import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import MainContainer from './containers/MainContainer';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { store, persistor } from './redux';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#ddd'
    },
    secondary: {
      main: '#222'
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <MainContainer display="flex" flexDirection="column" className={classes.root}/>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
