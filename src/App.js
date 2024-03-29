import React, {useRef} from 'react';
// import './App.css';
import { Grid } from '@material-ui/core';

import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const main = useRef(null)
  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
      <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Pemasukan" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Pemasukan" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Pengeluaran" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
