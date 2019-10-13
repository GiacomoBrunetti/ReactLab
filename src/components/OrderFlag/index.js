import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import DoneAllRounded from '@material-ui/icons/DoneAllRounded';
import Order from '../../screens/Order';

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: 'row',
    alignContent: 'space-around',
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: theme.palette.primary.light,
    flex: 1,
  },
  textContainer: {
    flex: 4,
    color: theme.palette.primary.light,
    // height: theme.spacing(5),
    flexDirection: 'column',
  }
}))


function OrderFlag() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <DoneAllRounded className={classes.icon}/>
      <Box className={classes.textContainer}>
        <Typography variant="body1" component="div">ORDER RECEIVED</Typography>
        <Typography variant="body2" component="div">blah</Typography>
      </Box>
    </Box>
  )
}

export default React.memo(OrderFlag);