import axios from 'axios';

const CREATE_APPOINTMENT = 'doctors-appointment-front-end/appointment/CREATE_APPOINTMENT';
export const initialState = {
  fetchedData: '',
  status: '',
};

export const createAppointment = async (city, appointmentTime, doctorID) => {
  const data = await axios({
    method: 'POST',
    url: 'http://localhost:3001/api/v1/appointment/add',
    data: {
      city,
      appointment_time: appointmentTime,
      doctor_id: doctorID,
    },
  });
  return data;
};

export const appointmentAction = (data) => ({
  type: CREATE_APPOINTMENT,
  payload: data,
});

export const userAppointment = (city, appointmentTime, doctorId) => async (dispatch) => {
  const data = await createAppointment(city, appointmentTime, doctorId);
  dispatch(appointmentAction(data));
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
