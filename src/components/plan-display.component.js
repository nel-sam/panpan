import React from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Box,
} from "@material-ui/core";
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

  return <Box border={1} borderColor="grey.500" borderRadius="1%" m={1}>
    {plan.length > 0 ? renderPlan(plan) : renderError(orders.length === 0)}
  </Box>;
}

const renderPlan = (plan) => {
  return <Box m={1}>
    <Typography>Baking Plan</Typography>
    <TableContainer>
      <Table>
        <TableHead>
          <TableCell>Dough</TableCell>
          <TableCell>Loaf</TableCell>
        </TableHead>
        <TableBody>
          {plan.map(element => (
            <TableRow key={`${element.doughType}-${element.loafType}`}>
              <TableCell>{element.doughType}</TableCell>
              <TableCell>{element.loafType}</TableCell>
            </TableRow>))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>;
}

const renderError = (planIsEmpty) => {
  return <div>
    {!planIsEmpty && <Box m={1}><Typography>Plan is not possible. Contact customers to let them know.</Typography></Box>}
  </div>;
}
export default PlanDisplay;