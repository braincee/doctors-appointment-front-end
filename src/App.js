import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <div className="App">

    </div>
    </Provider>

  );

   }
}

export default App;
