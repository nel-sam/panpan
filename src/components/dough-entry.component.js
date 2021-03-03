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
import { setDoughs } from '../state/actions/doughAction';
import { DoughTypes, LoafTypes } from '../enums';

class DoughEntry extends React.Component {
  doughs = [];

  constructor(props) {
    super(props);
    this.state = {
      sourdough: false,
      banana: false,
      wholeGrain: false,
    }
  }

  handleDoughToggle = (event) => {
    const doughType = event.target.name;
    const isChecked = event.target.checked;

    this.setState({
      sourdough: doughType === DoughTypes.Sourdough ? isChecked : this.state.sourdough,
      banana: doughType === DoughTypes.Banana ? isChecked : this.state.banana,
      wholeGrain: doughType === DoughTypes.WholeGrain ? isChecked : this.state.wholeGrain,
    });

    // Remove from doughs array if being unchecked
    if (this.doughs.indexOf(doughType) >= 0 && !isChecked) {
      this.doughs.splice(this.doughs.indexOf(doughType), 1);
    } else if (this.doughs.indexOf(doughType) < 0) {
      this.doughs.push(doughType);
    }

    this.props.setDoughs(this.doughs);
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

export default connect(null, { setDoughs })(DoughEntry);