import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DoughEntry from '../src/components/dough-entry.component';
import PlanDisplay from './../src/components/plan-display.component';

export default function Index() {
  return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            PanPan Bread Planner
        </Typography>
          <DoughEntry />
          <PlanDisplay />
        </Box>
      </Container>
  );
}
