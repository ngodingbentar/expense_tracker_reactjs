import React, { useState, useContext } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseTrackerContext } from '../../../context/context';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import useStyles from './styles';
import formatDate from '../../../utils/formatDate';
import CustomizedSnackbar from '../../Snackbar/Snackbar';

const initialState = {
  amount: '',
  category: '',
  type: 'Pemasukan',
  date: formatDate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const { addTransaction } = useContext(ExpenseTrackerContext);
  const [formData, setFormData] = useState(initialState);
  const [open, setOpen] = React.useState(false);

  const createTransaction = () => {
    // if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;

    // if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
    //   setFormData({ ...formData, type: 'Pemasukan' });
    // } else if (expenseCategories.map((iC) => iC.type).includes(formData.category)) {
    //   setFormData({ ...formData, type: 'Pengeluaran' });
    // }

    addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
    setFormData(initialState);
    setOpen(true);
  };

  const selectedCategories = formData.type === 'Pemasukan' ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      {/* <Snackbar open={open} setOpen={setOpen} /> */}
      <CustomizedSnackbar open={open} setOpen={setOpen} />
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Jenis</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Pemasukan">Pemasukan</MenuItem>
            <MenuItem value="Pengeluaran">Pengeluaran</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Kategori</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Jumlah" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth label="Tanggal" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction} >Create</Button> 
    </Grid>
  )
}

export default Form