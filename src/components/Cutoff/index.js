import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    height: theme.spacing(6),
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.light,
  },
  subTitle: {
    color: theme.palette.secondary.light,
  }
}))

function Cutoff() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.title}>Friday, October 11th | 1st Delivery</Typography>
      <Typography variant="body2" className={classes.subTitle}>0d 8h 11m until order cut off</Typography>
    </Box>
  )
}

export default React.memo(Cutoff);