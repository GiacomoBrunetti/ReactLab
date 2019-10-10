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
}
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
      className={classes.root}
    >
      <BottomNavigationAction
        onClick={() => redirectTo('/today')}
        className={classes.action}
        label="Today"
        icon={<RssFeedRoundedIcon />}
      />
      <BottomNavigationAction
        onClick={() => redirectTo('/planner')}
        className={classes.action}
        label="Planner"
        icon={<CalendarTodayRoundedIcon />}
      />
      <BottomNavigationAction
        onClick={() => redirectTo('/shop')}
        className={classes.action}
        label="Shop"
        icon={<AddCircleOutlineRoundedIcon />}
      />
      <BottomNavigationAction
        className={classes.action}
        onClick={() => redirectTo('/order')}
        label="Order"
        icon={<ShoppingBasketRoundedIcon />}
      />
    </BottomNavigation>
  );
}

export default withRouter(BottomNavigator);