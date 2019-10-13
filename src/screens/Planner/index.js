import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import SimpleTabs from '../../components/SimpleTabs';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import PlannerList from '../../lists/PlannerList';
import MonthPicker from '../../components/MonthSelector';

import containerHeight from '../../utils/containerHeigth';

import plannerData from '../../seeds/planner';

const useStyles = makeStyles(theme => ({
  tabs: {
    position: 'absolute',
    top: 0,
    right:0
  },
  header: {
    alignContent: 'space-between',
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.light,
    // position: 'fixed',
    // zIndex: '8'
  },
  name: {
    flex: 5
  },
  origin: {
    flex: 2,
  },
  until: {
    flex: 3
  },
}));

const months = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC'
]



function Planner() {
  const classes = useStyles();

  const tabNames = ['FRUIT', 'VEGETABLES'];
  const [fruits, setFruits] = React.useState(plannerData.filter(i => i.category_group === 'Fruit'));
  const [vegetables, setVegetables] = React.useState(plannerData.filter(i => i.category_group === 'Vegetables'));

  const [value, setValue] = React.useState(0);
  const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth())
  const [fruit, setFruit] = React.useState([]);
  const [veg, setVeg] = React.useState([]);

  const productBelongsToMonth = product => {
    let monthsArray = [...months];
    const beginningIndex = monthsArray.indexOf(product.available_from);
    const endingIndex = monthsArray.indexOf(product.available_until_month);
    const indexOfSelectedMonth = selectedMonth;
    const inverted = beginningIndex > endingIndex;
    if (!inverted) {
      monthsArray = monthsArray.map(month => monthsArray.indexOf(month) >= beginningIndex && endingIndex >= monthsArray.indexOf(month));
    } else {
      monthsArray = monthsArray.map(month => monthsArray.indexOf(month) >= beginningIndex || endingIndex >= monthsArray.indexOf(month));
    }
    return monthsArray[indexOfSelectedMonth];
  };

  React.useEffect(() => {
    setFruit(fruits.filter(productBelongsToMonth));
    setVeg(vegetables.filter(productBelongsToMonth));
  }, [selectedMonth, fruits, vegetables])

  const onMonthSelect = index => setSelectedMonth(index);
  const handleChange = (event, newValue) => setValue(newValue);
  const handleSwipeChange = newValue => setValue(newValue);

  return (
    <div>
      <MonthPicker onMonthSelect={onMonthSelect} selectedMonth={selectedMonth} months={months}/>
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <ListItem className={classes.header}>
        <Typography className={classes.name}>PRODUCT</Typography>
        <Typography className={classes.origin}>ORIGIN</Typography>
        <Typography className={classes.until}>UNTIL</Typography>
      </ListItem>
      <SwipeableViews
        containerStyle={{
          height: containerHeight-56,
          WebkitOverflowScrolling: 'touch'
        }}
        enableMouseEvents
        index={value}
        onChangeIndex={handleSwipeChange}
      >
        <PlannerList products={fruit}/>
        <PlannerList products={veg} />
      </SwipeableViews>
    </div>
  )
}

export default React.memo(Planner);