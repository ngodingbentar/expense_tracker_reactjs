import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import useStyles from './styles';

const Form = () => {
  const classes = useStyles();
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
          {/* <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}> */}
          <Select>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          {/* <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}> */}
          <Select>
            {/* {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)} */}
            <MenuItem value="business">business</MenuItem>
            <MenuItem value="salary">salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Date" type="date" />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth >Create</Button> 
    </Grid>
  )
}

export default Form