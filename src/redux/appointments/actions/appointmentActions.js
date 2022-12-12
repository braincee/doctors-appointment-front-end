import axios from 'axios';
import {
  CREATE_APPOINTMENT, GET_APPOINTMENTS, DELETE_APPOINTMENT, RESET_APPOINTMENT,
} from './types';

const appointmentAction = (response) => ({
  type: CREATE_APPOINTMENT,
  payload: response,
});

const createAppointment = async (appointment, userId, doctorId) => {
  const response = await axios.post(`http://localhost:3001/api/v1/appointment/add?user_id=${userId}&doctor_id=${doctorId}`, appointment);
  return response;
};

export const getAppointments = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3001/api/v1/appointments');
  dispatch({
    type: GET_APPOINTMENTS,
    payload: response.data,
  });
};

export const deleteAppointment = (id) => async (dispatch) => {
  try {
    await axios.delete(`${'http://localhost:3001/api/v1/appointment'}/${id}`);
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

export const resetAppointmentAction = () => ({
  type: RESET_APPOINTMENT,
});

const userAppointment = (appointment, userId, doctorId) => async (dispatch) => {
  const response = await createAppointment(appointment, userId, doctorId);
  dispatch(appointmentAction(response));
};

export default userAppointment;
