import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '102px',
    width: '140px',
  },
  flag: {
    padding: theme.spacing(.5),
    marginBottom: theme.spacing(.5),
    backgroundColor: theme.palette.common.green,
    fontSize: theme.spacing(1)
  }
}));


function ImageContainer(props) {
  const { url, flags } = props;
  const classes = useStyles();

  const Flag = ({type, style, key}) => (<Typography key={key} variant="caption" className={classes.flag}>{type}</Typography>)

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${url})` }} >
      <div>
        {flags.map(Flag)}
      </div>
    </div>
  )
}


export default React.memo(ImageContainer);
