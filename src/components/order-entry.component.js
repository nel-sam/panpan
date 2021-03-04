import React from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  FormGroup,
  TextField,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { setOrders } from '../state/actions/orderAction';
import { DoughTypes, LoafTypes } from '../enums';

class OrderEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  handleOrderChange = (doughType, loafType, count) => {
    let newOrders = [];
    const index = this.state.orders.findIndex(order =>
      order.doughType === doughType && order.loafType === loafType);

    if (index >= 0) {
      newOrders = [...this.state.orders];

      if (count === 0) {
        newOrders.splice(index, 1);
      } else {
        newOrders[index].count = count;
      }
    } else {
      newOrders = [
        ...this.state.orders, {
          doughType: doughType,
          loafType: loafType,
          count: count,
        }];
    }

    this.setState({
      orders: newOrders,
    });

    this.props.setOrders(newOrders);
  }

  handlePanOrderChange = (event) =>
    this.handleOrderChange(event.target.id, LoafTypes.Pan, +event.target.value);
  handleRoundOrderChange = (event) =>
    this.handleOrderChange(event.target.id, LoafTypes.Round, +event.target.value);

  render() {
    return <Box border={1} borderColor="grey.500" borderRadius="1%" m={1}>
      <FormControl component='fieldset' style={{ marginTop: 30 }}>
        <Grid container>
          <Grid item xs>
            <Container>
              <FormLabel component='legend'>Pan Loaf Orders</FormLabel>
              <FormGroup>
                <TextField
                  id={DoughTypes.Sourdough}
                  label='Sour Dough'
                  type='number'
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ inputProps: { min: 0 } }}
                  variant='outlined'
                  margin='normal'
                  onChange={this.handlePanOrderChange} />
                <TextField
                  id={DoughTypes.Banana}
                  label='Banana'
                  type='number'
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ inputProps: { min: 0 } }}
                  variant='outlined'
                  margin='normal'
                  onChange={this.handlePanOrderChange} />
                <TextField
                  id={DoughTypes.WholeGrain}
                  label='Whole Grain'
                  type='number'
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ inputProps: { min: 0 } }}
                  variant='outlined'
                  margin='normal'
                  onChange={this.handlePanOrderChange} />
              </FormGroup>
            </Container>
          </Grid>
          <Grid item xs>
            <Container>
              <FormLabel component='legend'>Round Loaf Orders</FormLabel>
              <FormGroup>
                <TextField
                  id={DoughTypes.Sourdough}
                  label='Sour Dough'
                  type='number'
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ inputProps: { min: 0 } }}
                  variant='outlined'
                  margin='normal'
                  onChange={this.handleRoundOrderChange} />
                <TextField
                  id={DoughTypes.Banana}
                  label='Banana'
                  type='number'
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ inputProps: { min: 0 } }}
                  variant='outlined'
                  margin='normal'
                  onChange={this.handleRoundOrderChange} />
                <TextField
                  id={DoughTypes.WholeGrain}
                  label='Whole Grain'
                  type='number'
                  InputLabelProps={{ shrink: true }}
                  InputProps={{ inputProps: { min: 0 } }}
                  variant='outlined'
                  margin='normal'
                  onChange={this.handleRoundOrderChange} />
              </FormGroup>
            </Container>
          </Grid>
        </Grid>
      </FormControl>
     { renderCurrentOrder(this.state.orders) }
    </Box>;
  }
}

const renderCurrentOrder = (orders) => {
  return <Box m={1}>
  {orders.length > 0 && <Typography>Current order</Typography>}
  {orders.map(order =>
    <Typography>{order.doughType} {order.loafType}: {order.count}</Typography>)}
</Box>;
}

export default connect(null, { setOrders })(OrderEntry);