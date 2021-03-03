import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { connect } from "react-redux";
import { setOrders} from '../state/actions/orderAction';
import { DoughTypes, LoafTypes } from '../enums';

class OrderEntry extends React.Component {
  orders = [];

  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  handleAddOrder = (event) => {
    this.setState({
    });

    this.props.setOrder(this.orders);
  };

  render() {
    return <Container>
      <FormControl required component="fieldset">
        <FormLabel component="legend">Dough Types</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={this.state.sourdough} onChange={this.handleDoughToggle} name={DoughTypes.Sourdough} />}
            label="Sour Dough" />
          <FormControlLabel
            control={<Checkbox checked={this.state.banana} onChange={this.handleDoughToggle} name={DoughTypes.Banana} />}
            label="Banana" />
          <FormControlLabel
            control={<Checkbox checked={this.state.wholeGrain} onChange={this.handleDoughToggle} name={DoughTypes.WholeGrain} />}
            label="Whole Grain" />
        </FormGroup>
      </FormControl>
    </Container>;
  }
}

export default connect(null, { setOrders })(OrderEntry);