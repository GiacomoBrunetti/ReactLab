import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RssFeedRoundedIcon from '@material-ui/icons/RssFeedRounded';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    // backgroundColor: '#000',
    color: 'white'
  },
  action: {
    color: 'white',
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="TODAY" icon={<RssFeedRoundedIcon color="seconday" />} />
      <BottomNavigationAction label="PLANNER" icon={<CalendarTodayRoundedIcon color="seconday"/>} />
      <BottomNavigationAction label="SHOP" icon={<AddCircleOutlineRoundedIcon color="seconday"/>} />
      <BottomNavigationAction label="ORDER" icon={<ShoppingBasketRoundedIcon color="seconday"/>} />
    </BottomNavigation>
  );
}