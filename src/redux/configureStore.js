import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginSessionsReducer from './user/login';
import appointmentReducer from './appointments/appointmentReducer';
import doctorsReducer from './doctorReduce/doctors';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: loginSessionsReducer,
  appointment: appointmentReducer,
  doctors: doctorsReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
    thunk,
  }),

});

export default store;
