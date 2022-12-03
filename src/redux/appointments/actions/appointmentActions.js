import axios from 'axios';
import CREATE_APPOINTMENT from './types';

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

const userAppointment = (city, appointmentTime, doctorId) => async (dispatch) => {
  const response = await createAppointment(city, appointmentTime, doctorId);
  dispatch(appointmentAction(response));
};

export default userAppointment;
