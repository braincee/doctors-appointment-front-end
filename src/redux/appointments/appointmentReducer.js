import { CREATE_APPOINTMENT, GET_APPOINTMENTS, DELETE_APPOINTMENT } from './actions/types';

const initialState = {
  fetchedData: '',
  status: '',
  appointments: [],
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT:
      return {
        ...state,
        fetchedData: action.payload.response,
        status: action.payload.status,
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: action.payload,
      };
    case DELETE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.filter((appointment) => appointment.id !== action.payload),
      };
    default:
      return state;
  }
};

export default appointmentReducer;
