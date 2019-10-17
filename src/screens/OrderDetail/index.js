import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import FullScreenDialog from '../../components/FullScreenDialog';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.primary.main
  },
  text: {
    color: theme.palette.primary.light
  }
}))

function OrderDetail() {
  const classes = useStyles();
  let { orderId } = useParams();
  return (
    <FullScreenDialog className={classes.root}>
      <Typography className={classes.text}>{orderId}</Typography>
    </FullScreenDialog>
  )
}

export default React.memo(OrderDetail);