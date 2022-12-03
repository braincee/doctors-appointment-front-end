import axios from 'axios';
import CREATE_APPOINTMENT from './types';

const appointmentAction = (data) => ({
  type: CREATE_APPOINTMENT,
  payload: data,
});

const createAppointment = async (city, appointmentTime, doctorID) => {
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

const userAppointment = (city, appointmentTime, doctorId) => async (dispatch) => {
  const data = await createAppointment(city, appointmentTime, doctorId);
  dispatch(appointmentAction(data));
};

export default userAppointment;
