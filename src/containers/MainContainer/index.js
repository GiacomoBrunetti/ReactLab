import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainNavigation from '../../navigation/MainNavigation';
import containerHeight from '../../utils/containerHeigth';



const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(7),
    },
    position: 'fixed',
    width: '100vw',
  }
}))

function MainContainer() {

  const classes = useStyles();
  return (
    <div className={classes.root} style={{ height: containerHeight}}>
      <MainNavigation />
    </div>
  )
}

export default React.memo(MainContainer);