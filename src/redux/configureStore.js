import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginSessionsReducer from './user/login';
import registerSessionsReducer from './user/register';
import appointmentReducer from './appointments/appointmentReducer';
import doctorsReducer from './doctorReduce/doctors';

const rootReducer = combineReducers({
  loginSessionsReducer,
  registerSessionsReducer,
  appointmentReducer,
  doctor: doctorsReducer,
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
