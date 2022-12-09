import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/configureStore';
import App from './App';
=======
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './main.css';
import reportWebVitals from './reportWebVitals';
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e

const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
