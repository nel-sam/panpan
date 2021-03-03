import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux'

const useDoughs= () => {
  return useSelector(
    (state) => ({
      doughs: state.doughs,
    })
  );
}

const PlanDisplay = () => {
  const { doughs } = useDoughs();

  return <Container>
    <Typography>Plans {doughs.length}</Typography>
  </Container>;
}

export default PlanDisplay;