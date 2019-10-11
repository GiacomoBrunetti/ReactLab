import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
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

  const search = useSelector(state => state.searchReducer.keywords);
  console.log(search)

  const body = (
    <div>
      <BottomNavigation />
      <BottomNavigator />
    </div>
  )

  const renderBody = () =>  ((!search || (search && search.length < 3)) ? body : null);

  return (
    <div className={classes.fill}>
      <TopBar/>
      {renderBody()}
    </div>
  );
}

export default React.memo(PrimarySearchAppBar);


