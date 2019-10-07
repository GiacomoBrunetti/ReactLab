import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../common/components/SimpleTabs';
import PlannerList from '../../common/lists/Planner';
import MonthPicker from '../../common/components/MonthSelector';

import plannerData from '../../seeds/planner';

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

  const tabNames = ['FRUIT', 'VEGETABLES'];

  const fruits = plannerData.filter(i => i.category_group === 'Fruit');
  const vegetables = plannerData.filter(i => i.category_group === 'Vegetables');

  const [value, setValue] = React.useState(0);
  const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth())
  const [fruit, setFruit] = React.useState([]);
  const [veg, setVeg] = React.useState([]);

  React.useEffect(() => {
    setFruit(fruits.filter(productBelongsToMonth));
    setVeg(vegetables.filter(productBelongsToMonth));
  }, [selectedMonth])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onMonthSelect = index => setSelectedMonth(index);

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

  return (
    <div>
      <MonthPicker onMonthSelect={onMonthSelect} selectedMonth={selectedMonth} months={months}/>
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <PlannerList value={value} index={0} products={fruit}/>
      <PlannerList value={value} index={1} products={veg} />
    </div>
  )
}

export default React.memo(Planner);