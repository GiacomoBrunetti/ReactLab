import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
    // flexGrow: 1,
    // flexDirection: 'row',
    // alignContent: 'space-between',
    // justifyContent: 'center',
  },
  plusMinusContainer: {
    display: 'inline-block',
    flex: 1
  },
  btn: {
    color: theme.palette.primary.light,
    borderWidth: 1,
    borderColor: theme.palette.secondary.light,
    borderRadius: 0,
    padding: theme.spacing(.5),
    maxWidth: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center',
    flex: 1
  },
}));


export default function OrderRow(props) {
  const { product } = props;

  const classes = useStyles();
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
    console.log(steps, quantity)
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

  const addBtn = (<Button className={classes.btn} variant="outlined" onClick={addQuantity}>ADD</Button>)

  const addRemove = () => (
    <Box flex={1} display="flex" flexDirection="row">
      <Button className={classes.btn}variant="outlined" flex={1} onClick={removeQuantity}>
        -
      </Button>
      <input
        className={classes.btn}
        type="number"
        value={quantity}
        onChange={handleChange}
        margin="none"
        required={true}
        ></input>
      <Button className={classes.btn} variant="outlined" flex={1} onClick={addQuantity}>
        +
      </Button>
    </Box>
  )

  const unitBtn = () => {
    return (
      <Button className={classes.btn} variant="outlined" onClick={selectNextUnit}>
        {selectedUnit.name}
      </Button>
    )
  }

  React.useEffect(() => {
    function makeRequest(qty, unit) {
      if (!!qty) {
        console.log(`${qty} ${unit.name}`)
      }
    }
    makeRequest(quantity, selectedUnit)
  }, [quantity, selectedUnit])

  return (
    <Box flex={1} className={classes.root}>
      {unitBtn()}
      <Box className={classes.plusMinusContainer}>
      {!steps && addBtn}
      {!!steps && addRemove()}
      </Box>
    </Box>
  )
}