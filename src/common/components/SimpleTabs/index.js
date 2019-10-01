import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    key: `${index}`
  };
}


function SimpleTabs(props) {

  const { tabNames, handleChange, value } = props;

  const renderTab = (tabName, index) => (<Tab label={tabName} {...a11yProps(index)} />);

  return (
    <AppBar position="static">
      <Tabs
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