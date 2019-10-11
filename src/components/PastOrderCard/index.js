import React from 'react';
import { shallowEqual, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    // flexDirection: 'column',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing(1)
  },
  main: {
    flexDirection: 'column',
    color: theme.palette.primary.main,
    flex: 1,
  },
  top: {
    // flexDirection: 'row',
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    flex: 1
  },
  date: {
    color: theme.palette.primary.light,
    textTransform: 'upperCase',
  },
  slot: {
    color: theme.palette.secondary.light,
  },
  number: {
    color: theme.palette.primary.light
  }
}))

function PastOrderCard(props) {
  const { order } = props;

  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
        <Box className={classes.top}>
        <Typography variant="body1" className={classes.date}>{order.delivery_date}</Typography>
        <Typography variant="body2" className={classes.slot}>{order.delivery_slot}</Typography>
        </Box>
        <Box className={classes.bottom}>
          <Typography variant="body1" className={classes.number}>{order.order_number}</Typography>
        </Box>

    </ListItem>
  )
}

export default React.memo(PastOrderCard);