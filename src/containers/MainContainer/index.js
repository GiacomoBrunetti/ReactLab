import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigator from '../../components/BottomNavigator';
import TopBar from '../../components/TopBar';
import BottomNavigation from '../../navigation/BottomNavigation';

const useStyles = makeStyles(theme => ({
  fill: {
    // flex: 1,
    // flexFlow: 'column',
    alignContent: 'stretch',
    // backgroundColor: 'black',
    // color: 'white',
    paddingBottom: '54px',
    backgroundColor: theme.palette.primary.main
  }
}));

function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.fill}>
      <TopBar/>
      <BottomNavigation />
      <BottomNavigator />
    </div>
  );
}

export default React.memo(PrimarySearchAppBar);


