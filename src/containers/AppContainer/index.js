import React, {} from 'react';
import { useSelector } from 'react-redux';
import AuthContainer from '../Auth';
import MainContainer from '../MainContainer';

function AppContainer() {
  const loggedIn = useSelector(state => state.authState.loggedIn);
  console.log('render AppContainer', loggedIn)
  if (loggedIn) {
    return (
      <MainContainer>
      </MainContainer>
      );
  } else {
    return (<AuthContainer/>);
  }
  // return (<MainContainer/>)
}

export default React.memo(AppContainer);


