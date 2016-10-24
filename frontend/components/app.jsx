import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppStyle from './app_style';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  fontFamily: 'Raleway, sans-serif',
  palette: {
    primary1Color: '#626e60',
    accent1Color: '#626e60'
  }
});


const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppStyle />
  </MuiThemeProvider>
);

export default App;
