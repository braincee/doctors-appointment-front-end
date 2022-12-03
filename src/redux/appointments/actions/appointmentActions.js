import axios from 'axios';
import { CREATE_APPOINTMENT, GET_APPOINTMENTS, DELETE_APPOINTMENT } from './types';

const appointmentAction = (response) => ({
  type: CREATE_APPOINTMENT,
  payload: response,
});

const createAppointment = async (city, appointmentTime, doctorID) => {
  const response = await axios({
    method: 'POST',
    url: 'http://localhost:3001/api/v1/appointment/add',
    response: {
      city,
      appointment_time: appointmentTime,
      doctor_id: doctorID,
    },
  });
  return response;
};

export const getAppointments = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/ap1/v1/appointments');
  dispatch({
    type: GET_APPOINTMENTS,
    payload: response.data,
  });
};

export const deleteAppointment = (id) => async (dispatch) => {
  try {
    await axios.delete(`${'http://localhost:3001/api/v1/apointment'}/${id}`);
    dispatch({
      type: DELETE_APPOINTMENT,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_APPOINTMENT,
      payload: id,
    });
  }
};

const userAppointment = (city, appointmentTime, doctorId) => async (dispatch) => {
  const response = await createAppointment(city, appointmentTime, doctorId);
  dispatch(appointmentAction(response));
};

export default userAppointment;
