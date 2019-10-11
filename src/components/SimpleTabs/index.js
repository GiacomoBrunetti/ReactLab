import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles(theme => ({
  indicator: {
    backgroundColor: theme.palette.primary.light,
  },
  appBar: {
    position: 'fixed'
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    key: `${index}`
  };
}


function SimpleTabs(props) {
  const classes = useStyles();

  const { tabNames, handleChange, value } = props;

  const renderTab = (tabName, index) => (<Tab label={tabName} {...a11yProps(index)} />);

  return (
    <AppBar className={classes.appBar} position="static">
      <Tabs
        classes={{ indicator: classes.indicator }} 
        value={value}
        onChange={handleChange}
        variant="fullWidth"
      >
      {tabNames && tabNames.map((name, index) => renderTab(name, index))}
      </Tabs>
    </AppBar>
  )
}

export default React.memo(SimpleTabs);
// SimpleTabs.PropTypes = {
//   tabNames: PropTypes.arrayOf(PropTypes.string).isRequired,
//   handleChange: PropTypes.func.isRequired,
// }