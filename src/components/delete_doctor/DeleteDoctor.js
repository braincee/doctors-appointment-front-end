import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import localStorages from '../../helpers/localStorage';
import {
  deleteDoctorAction,
  getDoctorsAction,
} from '../../redux/doctorReduce/doctors';
import './delete_doctor.css';

const DeleteDoctor = () => {
  const doctors = useSelector((state) => state.doctors);
  const [successNotice, setSuccessNotice] = useState(false);
<<<<<<< HEAD:src/components/Doctors/DeleteDoctor.js
=======
  const navigate = useNavigate();
  const hasAccount = localStorages.getUser();
  const role = hasAccount.user === undefined ? '' : hasAccount.user.name;

  useEffect(() => {
    if (role !== 'admin') {
      navigate('/401');
    }
  }, []);
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e:src/components/delete_doctor/DeleteDoctor.js

  const dispatch = useDispatch();
  const deleteDoctor = (id) => {
    dispatch(deleteDoctorAction(id));
    setSuccessNotice(true);
<<<<<<< HEAD:src/components/Doctors/DeleteDoctor.js
=======
    navigate('/');
    window.location.reload();
>>>>>>> a5594249d3572bd618dd2d3c1dae731f1b34070e:src/components/delete_doctor/DeleteDoctor.js
  };

  useEffect(() => {
    dispatch(getDoctorsAction());
  }, [dispatch]);

  return (
    <div className="delete-container">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="delete-details">
          <img src={doctor.image} alt="doctor" className="delete-image" />
          <p className="delete-name">{doctor.name}</p>
          <button
            type="button"
            onClick={() => deleteDoctor(doctor.id)}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
      {successNotice && (
        <p className="text-center text-sky-500 text-lg mt-4">
          Doctor deleted succesfully!
        </p>
      )}
    </div>
  );
};

export default DeleteDoctor;
