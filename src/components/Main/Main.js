import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material';
import { useSpeechContext } from '@speechly/react-client';

import useStyles from './styles';

const ExpenseTracker = () => {
  const classes = useStyles();
  // const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ${}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          {/* <InfoCard /> */}
        </Typography>
        <Divider className={classes.divider} />
        {/* <Form /> */}
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* <List /> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;