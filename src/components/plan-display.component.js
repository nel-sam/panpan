import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux'

const useStateObjs= () => {
  return useSelector(
    (state) => ({
      doughs: state.doughs,
      orders: state.orders,
    })
  );
}

const PlanDisplay = () => {
  const { doughs, orders } = useStateObjs();

  return <Container>
    <Typography>Plans {doughs.length} {orders.length}</Typography>
  </Container>;
}

export default PlanDisplay;