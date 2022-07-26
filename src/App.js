import { useRef } from 'react';

import { Grid, ThemeProvider, useTheme } from '@mui/material';

import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles';
// import { useTheme } from '@emotion/react';


const App = () => {
  const theme = useTheme()

  const classes = useStyles(theme);
  const main = useRef(null)
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
          <Grid item xs={12} sm={4} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid ref={main} item xs={12} sm={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.last}>
            <Details title="Expense" />
          </Grid>
          {/* <PushToTalkButtonContainer>
            <PushToTalkButton />
          </PushToTalkButtonContainer> */}
        </Grid>
      </ThemeProvider>
  </div>
  )
}

export default App