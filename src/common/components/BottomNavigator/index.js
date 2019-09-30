import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RssFeedRoundedIcon from '@material-ui/icons/RssFeedRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    // backgroundColor: theme.palette.primary.main
  },
  // action: {
  //   backgroundColor: theme.palette.primary.light,
  //   color: theme.palette.primary.light,
  // }
}));

function BottomNavigator(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const redirectTo = path => props.history.push(path);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction onClick={() => redirectTo('/today')} className={classes.action} label="TODAY" icon={<RssFeedRoundedIcon  />} />
      <BottomNavigationAction onClick={() => redirectTo('/planner')} label="PLANNER" icon={<CalendarTodayRoundedIcon />} />
      <BottomNavigationAction onClick={() => redirectTo('/shop')} label="SHOP" icon={<AddCircleOutlineRoundedIcon />} />
      <BottomNavigationAction onClick={() => redirectTo('/order')} label="ORDER" icon={<ShoppingBasketRoundedIcon />} />
    </BottomNavigation>
  );
}

export default withRouter(BottomNavigator);