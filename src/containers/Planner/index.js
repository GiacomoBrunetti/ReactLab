import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleTabs from '../../common/components/SimpleTabs';
import PlannerList from '../../common/lists/Planner';
import MonthPicker from '../../common/components/MonthSelector';

import plannerData from '../../seeds/planner';


export default function Planner() {

  const tabNames = ['FRUIT', 'VEGETABLES'];

  const products = plannerData;

  const fruit = plannerData.filter(i => i.category_group === 'Fruit');
  const veg = plannerData.filter(i => i.category_group === 'Vegetables');

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div flex={1}>
      <MonthPicker />
      <SimpleTabs tabNames={tabNames} handleChange={handleChange} value={value}/>
      <PlannerList value={value} index={0} products={fruit}/>
      <PlannerList value={value} index={1} products={veg} />
    </div>
  )
}