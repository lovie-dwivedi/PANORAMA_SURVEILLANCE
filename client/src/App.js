import React, { useEffect } from 'react'
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
