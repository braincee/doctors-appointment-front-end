import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import AllDoctors from './components/Doctors/Doctors';
import Doctor from './components/Doctors/Doctor';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <AllDoctors />
          <Doctor />
        </div>
      </Provider>

    );
  }
}

export default App;
