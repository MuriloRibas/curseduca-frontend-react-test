import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LandingPage from './pages/Landing/index';
import { ThemeProvider } from 'styled-components';
import theme from './configs/styles/globalStyle/theme';
import { GlobalStyle } from './configs/styles/globalStyle/index';
import {initStore} from './store/index';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={initStore}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <LandingPage />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
