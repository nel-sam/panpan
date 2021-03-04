import React from 'react';
import { Container, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import PlanCalculator from './../services/plan-calculator.service';

const useStateObjs = () => {
  return useSelector(
    (state) => ({
      doughs: state.doughs,
      orders: state.orders,
    })
  );
}

const PlanDisplay = () => {
  const { doughs, orders } = useStateObjs();
  const plan = (new PlanCalculator()).calculatePlan(doughs, orders);

  return <Container>
    {plan.length > 0 ? renderPlan(plan) : renderError(orders.length === 0)}
  </Container>;
}

const renderPlan = (plan) => {
  return <div>
    <Typography>Plan</Typography>
    {plan.map(element =>
      <Typography>{element.doughType} {element.loafType}</Typography>)}
  </div>;
}

const renderError = (planIsEmpty) => {
  return <div>
    { !planIsEmpty && <Typography>Plan is not possible. Contact customers to let them know.</Typography>}
  </div>;
}
export default PlanDisplay;