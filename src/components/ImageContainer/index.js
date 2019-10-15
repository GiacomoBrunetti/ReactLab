import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '102px',
    width: '140px',
  }
}));


function ImageContainer(props) {
  const { url } = props;

  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundImage: `url(${url})` }} ></div>
  )
}


export default React.memo(ImageContainer);
