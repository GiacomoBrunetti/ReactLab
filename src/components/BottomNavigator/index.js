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
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: '100%',
    backgroundColor: theme.palette.primary.main
  },
  action: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    opacity: '.5',
    "&.Mui-selected": {
      color: theme.palette.primary.light,
      opacity: '1'
    }
  },
  navContainer: {
    bottom: 0,
    right: 0
  }
}));

function BottomNavigator(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.history.location.pathname);

  const redirectTo = path => () => props.history.push(path);
  const handleValueChange = (event, newValue) => setValue(newValue);

  return (
      <BottomNavigation
        value={value}
        onChange={handleValueChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          onClick={redirectTo('/today')}
          className={classes.action}
          label="Today"
          icon={<RssFeedRoundedIcon />}
          value='/today'
        />
        <BottomNavigationAction
          onClick={redirectTo('/planner')}
          className={classes.action}
          label="Planner"
          icon={<CalendarTodayRoundedIcon />}
          value='/planner'
        />
        <BottomNavigationAction
          onClick={redirectTo('/shop')}
          className={classes.action}
          label="Shop"
          icon={<AddCircleOutlineRoundedIcon />}
          value='/shop'
        />
        <BottomNavigationAction
          className={classes.action}
          onClick={redirectTo('/order')}
          label="Order"
          icon={<ShoppingBasketRoundedIcon />}
          value='/order'
        />
      </BottomNavigation>
  );
}

export default React.memo(withRouter(BottomNavigator));