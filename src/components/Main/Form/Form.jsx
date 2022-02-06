import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseTrackerContext } from '../../../context/context';

import useStyles from './styles';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: new Date(),
};

const Form = () => {
  const classes = useStyles();
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);

  const createTransaction = () => {
    // if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;

    // if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
    //   setFormData({ ...formData, type: 'Income' });
    // } else if (expenseCategories.map((iC) => iC.type).includes(formData.category)) {
    //   setFormData({ ...formData, type: 'Expense' });
    // }

    // setOpen(true);
    addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
    setFormData(initialState);
  };

  console.log('formdata', formData)

  return (
    <Grid container spacing={2}>
      {/* <Snackbar open={open} setOpen={setOpen} /> */}
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {/* {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)} */}
            <MenuItem value="business">business</MenuItem>
            <MenuItem value="salary">salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction} >Create</Button> 
    </Grid>
  )
}

export default Form