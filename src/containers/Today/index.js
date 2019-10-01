import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../common/components/SimpleTabs';




const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // backgroundColor: 'black',
    // color: 'white',
  },
});



export default function Today() {

  const tabNames = ['NEWS', 'FEATURES'];
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div flex={1} className={classes.root}>
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
    </div>
  );
}