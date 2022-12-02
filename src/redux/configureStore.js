import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginSessionsReducer from './user/login';
import registerSessionsReducer from './user/register';
import appointmentReducer from './appointment/appointmentReducer';

const rootReducer = combineReducers({
  loginSessionsReducer,
  registerSessionsReducer,
  appointmentReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
    thunk,
  }),

});

export default store;
