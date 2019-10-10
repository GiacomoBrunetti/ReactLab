import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../components/SimpleTabs';
import PlannerList from '../../lists/Planner';
import MonthPicker from '../../components/MonthSelector';

import plannerData from '../../seeds/planner';

const useStyles = makeStyles(theme => ({
  containerPlanner: {
    paddingTop: '56px;'
},
  plannerTabs: {
    paddingTop: '66px;',
}
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

  React.useEffect(() => {
    function productBelongsToMonth(product) {
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

    setFruit(fruits.filter(productBelongsToMonth));
    setVeg(vegetables.filter(productBelongsToMonth));
  }, [selectedMonth, fruits, vegetables])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onMonthSelect = index => setSelectedMonth(index);

  return (
    <div className={classes.containerPlanner}>
      <MonthPicker onMonthSelect={onMonthSelect} selectedMonth={selectedMonth} months={months}/>
      <div className={classes.plannerTabs}><SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/></div>
      <PlannerList value={value} index={0} products={fruit}/>
      <PlannerList value={value} index={1} products={veg} />
    </div>
  )
}

export default React.memo(Planner);