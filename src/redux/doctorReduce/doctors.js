import { NotificationManager } from 'react-notifications';
<<<<<<< HEAD
// import axios from '../../config/axios';
import axios from 'axios';
=======
import axios from '../../config/axios';
// const BASE_URL = 'http://localhost:3001/api/v1/doctors;
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e

const GET_DOCTORS = 'DOCTOR_APPOINTMENT/GET_DOCTORS';
const CREATE_DOCTOR = 'DOCTOR_APPOINTMENT/CREATE_DOCTOR';
const DELETE_DOCTOR = 'DOCTOR_APPOINTMENT/DELETE_DOCTOR';

const doctorsState = [];

const getDoctors = (payload) => ({
  type: GET_DOCTORS,
  payload,
});

const createDoctor = (payload) => ({
  type: CREATE_DOCTOR,
  payload,
});

const deleteDoctor = (id) => ({
  type: DELETE_DOCTOR,
  id,
});

export const getDoctorsAction = () => async (dispatch) => {
  axios
    .get('http://localhost:3001/api/v1/doctors')
    .then((res) => {
      dispatch(getDoctors(res.data));
    })
    .catch((error) => {
      dispatch(getDoctors(error.response.data));
    });
};

export const createDoctorAction = (doctor, userId) => async (dispatch) => {
  console.log(userId);
  axios
    .post(`http://localhost:3001/api/v1/doctors?user_id=${userId}`, doctor)
    .then((res) => {
      dispatch(createDoctor(res.data));
      NotificationManager.success(
        'You have added a new Doctor!',
        'Successful!',
        200,
      );
    })
    .catch((error) => {
      dispatch(createDoctor(error.response.data));
      NotificationManager.error(
        'Error while creating new Doctor!',
        'Error!',
      );
    });
};

export const deleteDoctorAction = (id) => async (dispatch) => {
  axios
    .delete(`http://localhost:3001/api/v1/doctors/${id}`)
    .then(() => {
      dispatch(deleteDoctor(id));
    });
};

const doctorsReducer = (state = doctorsState, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.payload;
    case CREATE_DOCTOR:
      return [...state, action.payload];
    case DELETE_DOCTOR:
      return state.filter((doctor) => doctor.id !== action.payload.id);
    default:
      return state;
  }
};

export default doctorsReducer;
