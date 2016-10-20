import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppStyle from './app_style';

const App = () => (
  <MuiThemeProvider>
    <AppStyle />
  </MuiThemeProvider>
);

export default App;
