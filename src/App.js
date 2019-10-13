import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createMuiTheme } from '@material-ui/core/styles';
import RootContainer from './containers/RootContainer';
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

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <RootContainer display="flex" flexDirection="column" />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default React.memo(App);
