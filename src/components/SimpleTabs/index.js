import React from 'react';
import { makeStyles } from '@material-ui/core/styles';  
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  indicator: {
    backgroundColor: theme.palette.primary.main,
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light
  }
}));

function a11yProps(tabName) {
  return {
    id: `${tabName}`,
    'aria-controls': `${tabName}`,
    key: `${tabName}`
  };
}


function SimpleTabs(props) {
  const classes = useStyles();

  const { tabNames, handleChange, value } = props;

  const renderTab = (tabName, index) => (
    <Tab label={tabName} {...a11yProps(tabName, index)} />
  );

  return (
    <div className={classes.appBar}>
      <Tabs
        className={classes.indicator}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        TabIndicatorProps={
          {
            style: { backgroundColor: 'white' }
          }
        }
      >
      {tabNames && tabNames.map(renderTab)}
      </Tabs>
    </div>
  )
}

export default React.memo(SimpleTabs);
// SimpleTabs.PropTypes = {
//   tabNames: PropTypes.arrayOf(PropTypes.string).isRequired,
//   handleChange: PropTypes.func.isRequired,
// }