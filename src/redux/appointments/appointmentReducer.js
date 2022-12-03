import CREATE_APPOINTMENT from './actions/types';

const initialState = {
  fetchedData: '',
  status: '',
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT:
      return {
        ...state,
        fetchedData: action.payload.data,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default appointmentReducer;
