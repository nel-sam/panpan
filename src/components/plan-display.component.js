import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { doughs } from './../state/selectors/doughSelector';

class PlanDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doughs: props.doughs
    };
  }

  render() {
    return <Container>
      <Typography>Plans {this.state.doughs.length}</Typography>
    </Container>;
  }
}

const mapStateToProps = state => ({ doughs: state.doughs });

export default connect(mapStateToProps)(PlanDisplay);