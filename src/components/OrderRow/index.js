import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex'
  },
  plusMinusContainer: {
    display: 'inline-block',
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
    margin: 0
  },
  inputQty: {
    borderWidth: 1,
    borderColor: theme.palette.secondary.light,
    textAlign: 'center',
    maxWidth: theme.spacing(5),
    backgroundColor: theme.palette.secondary.main,
    fontSize: '18px',
    color: theme.palette.primary.light,
    border: '1px solid rgb(78, 78, 78)',
    height: '30px',
    maxHeight: '30px',
    minHeight: '30px',
    margin: 0
  },
  '&:focus': {
    // border: 'none',
    outline: 'none',
  },
  btnQty: {
    color: theme.palette.primary.light,
    borderWidth: 1,
    borderColor: theme.palette.secondary.light,
    borderRadius: 0,
    padding: theme.spacing(.2),
    maxWidth: theme.spacing(5),
    minWidth: theme.spacing(5),
    backgroundColor: theme.palette.secondary.main,
    textAlign: 'center',
    margin: 0
  }
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

  const addBtn = React.useMemo(() =>
    (<Button className={classes.btn} variant="outlined" onClick={addQuantity}>ADD</Button>)
  )

  const addRemove = () => (
    <Box flex={1} display="flex" flexDirection="row" justifyContent="flex-end">
      <Button className={classes.btnQty}variant="outlined" onClick={removeQuantity}>
        -
      </Button>
      <input
        className={classes.inputQty}
        type="text"
        value={quantity}
        onChange={handleChange}
        margin="none"
        required
        ></input>
      <Button className={classes.btnQty} variant="outlined" onClick={addQuantity}>
        +
      </Button>
    </Box>
  )

  const unitBtn = () => {
    return (
      <Box flex={1}>
        <Button className={classes.btn} variant="outlined" onClick={selectNextUnit}>
          {selectedUnit.name}
        </Button>
      </Box>
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
    <Box className={classes.root}>
      {unitBtn()}
      {!steps && addBtn}
      {!!steps && addRemove()}
    </Box>
  )
}