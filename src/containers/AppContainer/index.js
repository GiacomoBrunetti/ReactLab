import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import BottomNavigator from '../../components/BottomNavigator';
import TopBar from '../../components/TopBar';
import MainContainer from '../MainContainer';
import SkeletonList from '../../lists/SkeletonList';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    // maxHeight: '100vh',
    flex: 1
  },
  body: {
    // maxHeight: '700px',
  },
  topBottomBar: {
    flex: 1,
  },

}));

function AppContainer() {
  const classes = useStyles();

  const search = useSelector(state => state.searchReducer.keywords);

  const renderBody = () =>  {
    if (!search || (search && search.length < 3)) {
      return <MainContainer />;
    } else {
      return <SkeletonList />;
    };
  }

  return (
    <div className={classes.root}>
      <TopBar className={classes.topBottomBar}/>
      <div className={classes.body}>
      {renderBody()}
      </div>
      <BottomNavigator className={classes.bottomNav}/>
    </div>
  );
}

export default React.memo(AppContainer);


