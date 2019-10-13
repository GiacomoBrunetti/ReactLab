import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import appConfig from '../../bin/config';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  main: {
    color: theme.palette.primary.main,
    flex: 1,
  },
  top: {
    flex: 1,
    paddingBottom: theme.spacing(1)
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
  const readableDate = new Date(order.delivery_date).toLocaleDateString(appConfig.locale, {
    day: 'numeric',
    weekday: 'short',
    month: 'short',
  });
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
      <Box className={classes.top}>
        <Typography variant="body1" className={classes.date}>{readableDate}</Typography>
        <Typography variant="caption" className={classes.slot}>{order.delivery_slot}</Typography>
      </Box>
      <Box className={classes.bottom}>
        <Typography variant="body1" className={classes.number}>{order.order_number}</Typography>
      </Box>
    </ListItem>
  )
}

export default React.memo(PastOrderCard);