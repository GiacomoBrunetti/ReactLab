import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import { flexbox, flex } from '@material-ui/system';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ProductList from '../ProductList';
import products from '../../../seeds/products';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    // backgroundColor: 'black',
    // color: 'white',
  },
});



export default function SimpleTabs() {
  const classes = useStyles();
  const { freqProducts, offerProducts, earlyProducts, peakProducts, lateProducts } = products;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div flex={1} className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          >
          <Tab label="FREQ" {...a11yProps(0)} />
          <Tab label="OFFER" {...a11yProps(1)} />
          <Tab label="EARLY" {...a11yProps(2)} />
          <Tab label="PEAK" {...a11yProps(3)} />
          <Tab label="LATE" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <ProductList style={{padding:0}} TabPanel={TabPanel} value={value} index={0} products={freqProducts}/>
      <ProductList style={{padding:0}} TabPanel={TabPanel} value={value} index={1} products={offerProducts}/>
      <ProductList style={{padding:0}} TabPanel={TabPanel} value={value} index={2} products={earlyProducts}/>
      <ProductList style={{padding:0}} TabPanel={TabPanel} value={value} index={3} products={peakProducts}/>
      <ProductList style={{padding:0}} TabPanel={TabPanel} value={value} index={4} products={lateProducts}/>
    </div>
  );
}
