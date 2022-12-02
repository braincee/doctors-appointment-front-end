import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import loginSessionsReducer from './user/login';
import registerSessionsReducer from './user/register';

const rootReducer = combineReducers({
  loginSessionsReducer,
  registerSessionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),

});

export default store;
