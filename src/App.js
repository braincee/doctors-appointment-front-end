import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import AllDoctors from './components/Doctors/AllDoctors';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <AllDoctors />
        </div>
      </Provider>

    );
  }
}

export default App;
