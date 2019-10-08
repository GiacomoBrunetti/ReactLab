import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  listItem: {
    height: '120px',
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    // backgroundColor: 'black',
    // color: 'white',
  },
  prdImage: {
    height: '100px',
    // width: '100px',
  },
  cardHeader: {
    // padding: '16px'
  }

}))

export default function OrderRow(props) {
  const { product } = props;

  const [steps, setSteps] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [selectedUnit, setSelectedUnit] = React.useState(product.productunits[0]);
  const unitChoices = product.productunits;


  const addQuantity = () => {
    const newSteps = steps + 1;
    const newQuantity = newSteps * selectedUnit.step;
    setSteps(newSteps);
    setQuantity(newQuantity);
  }

  const removeQuantity = () => {
    const newSteps = steps-1
    const newQuantity = newSteps * selectedUnit.step;
    setSteps(newSteps);
    setQuantity(newQuantity);
  }

  const handleChange = e => {
    if (e.target.value) {
      const newQuantity = parseFloat(e.target.value);
      const newSteps = Math.floor(newQuantity / selectedUnit.step);
      setSteps(newSteps);
      setQuantity(newQuantity);
    };
  }

  const selectNextUnit = () => {
    let nextIndex;
    const currentUnit = unitChoices.find(unit => unit.name === selectedUnit.name);
    const currentIndex = unitChoices.indexOf(currentUnit)
    if (currentIndex < unitChoices.length-1) {
      nextIndex = currentIndex + 1;
    } else {
      nextIndex = 0;
    };
    const nextUnit = unitChoices[nextIndex];
    const newSteps = Math.ceil(quantity / nextUnit.step);
    const newQuantity = newSteps * nextUnit.step;
    setSteps(newSteps);
    setQuantity(newQuantity);
    setSelectedUnit(nextUnit);

  }

  const addBtn = (<Button variant="outlined" flex={1} onClick={addQuantity}>ADD</Button>)

  const addRemove = () => (
    <Box flex={1} display="flex" flexDirection="row">
      <Button variant="outlined" flex={1} onClick={removeQuantity}>
        -
      </Button>
      <TextField
        type="number"
        style={{padding:0}}
        value={quantity}
        variant="outlined"
        onChange={handleChange}
        ></TextField>
      <Button variant="outlined" flex={1} onClick={addQuantity}>
        +
      </Button>
    </Box>
  )

  const unitBtn = () => {
    return (
      <Button variant="outlined" flex={1} onClick={selectNextUnit}>
        {selectedUnit.name}
      </Button>
    )
  }

  return (
    <Box flex={1} display="flex" flexDirection="row">
      {unitBtn()}
      <Box flex={1}>
      {!steps && addBtn}
      {!!steps && addRemove()}
      </Box>
    </Box>
  )
}