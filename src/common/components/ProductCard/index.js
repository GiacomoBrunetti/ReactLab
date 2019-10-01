import React, { Component } from 'react';
import {
  Box,
  Button,
  TextField,
  ListItem,
  ListItemText,
} from '@material-ui/core';

export default class ProductCard extends Component {
  product = this.props.product;

  classes = {
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
  };

  state = {
    steps: 0,
    quantity: 0,
    selectedUnit: this.product.productunits[0],
    unitChoices: this.product.productunits,
  }

  shouldComponentUpdate(newProps, newState) {
    const quantityChanged = this.state.quantity !== newState.quantity;
    const unitChanged = this.state.selectedUnit.name !== newState.selectedUnit.name;
    return quantityChanged || unitChanged;
  }

  componentDidUpdate() {
    this.makeApiRequest();
  }

  makeApiRequest = () => {
    const orderItem = {
      productId: this.product.id,
      quantity: this.state.quantity,
      unit: this.state.selectedUnit.name
    }
    console.log('[MAKING API REQUEST]: ', orderItem);
  }

  addQuantity = () => {
    const steps = this.state.steps;
    const newSteps = steps + 1;
    const newQuantity = newSteps * this.state.selectedUnit.step;
    this.setState({
      ...this.state,
      steps: newSteps,
      quantity: newQuantity
    });
  }

  removeQuantity = () => {
    const steps = this.state.steps;
    const newSteps = steps-1
    const newQuantity = newSteps * this.state.selectedUnit.step;
    this.setState({
      ...this.state,
      steps: newSteps,
      quantity: newQuantity
    });
  }

  renderAdd = () => {
    return (
      <Button variant="outlined" flex={1} onClick={this.addQuantity}>
        ADD
      </Button>
      )
  }

  handleChange = e => {
    if (e.target.value) {
      const newQuantity = parseFloat(e.target.value);
      const newSteps = Math.floor(newQuantity / this.state.selectedUnit.step);
      this.setState({
        ...this.state,
        steps: newSteps,
        quantity: newQuantity
      });
    };
  }

  renderOrderRow = () => {
    return (
      <Box flex={1} display="flex" flexDirection="row">
        <Button variant="outlined" flex={1} onClick={this.removeQuantity}>
          -
        </Button>
        <TextField
          type="number"
          style={{padding:0}}
          value={this.state.quantity}
          variant="outlined"
          onChange={this.handleChange}
          ></TextField>
        <Button variant="outlined" flex={1} onClick={this.addQuantity}>
          +
        </Button>
      </Box>
      )
  }

  selectNextUnit = () => {
    let nextIndex;
    const currentUnit = this.state.unitChoices.find(unit => unit.name === this.state.selectedUnit.name);
    const currentIndex = this.state.unitChoices.indexOf(currentUnit)
    if (currentIndex < this.state.unitChoices.length-1) {
      nextIndex = currentIndex + 1;
    } else {
      nextIndex = 0;
    };
    const nextUnit = this.state.unitChoices[nextIndex];
    const newSteps = Math.ceil(this.state.quantity / nextUnit.step);
    const newQuantity = newSteps * nextUnit.step;
    this.setState({
      ...this.state,
      selectedUnit: nextUnit,
      quantity: newQuantity,
      steps: newSteps
    });

  }

  renderUnit = () => {
    return (
      <Button variant="outlined" flex={1} onClick={this.selectNextUnit}>
        {this.state.selectedUnit.name}
      </Button>
    )
  }

  render () {
    const product = this.props.product;
    return (
      <ListItem style={this.classes.listItem} divider>
        <img
          alt="product"
          src={`https://natooraapp.uk.natoora.com${product.image}`}
          style={this.classes.prdImage}
        />
        <Box flex={1} flexDirection="column" padding={0}>
          <Box flex={1}>
            <ListItemText>{product.name}</ListItemText>
            <ListItemText>{`${product.origin_initials} | ${product.growing_ethos_initials}`}</ListItemText>
          </Box>
          <Box flex={1} display="flex" flexDirection="row">
            {this.renderUnit()}
            <Box flex={1}>
            {!this.state.steps && this.renderAdd()}
            {!!this.state.steps && this.renderOrderRow()}
            </Box>
          </Box>
        </Box>
      </ListItem>
    )
  }
}


