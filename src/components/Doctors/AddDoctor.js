import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createDoctorAction } from '../../redux/doctorReduce/doctors';

import './add_doctor.css';

const AddDoctor = () => {
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [fee, setFee] = useState('');
  const [image, setImage] = useState('');
  // const [errors, setErrors] = useState('');

  const user = useSelector((state) => state.user.fetchedData);

  const dispatch = useDispatch();
  const doctorsName = document.getElementById('name');

  const doctorsSpeciality = document.getElementById('speciality');

  const doctorsBill = document.getElementById('fee');

  const doctorsImage = document.getElementById('image');

  // const newState = useSelector((state) => state.doctors);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const doctors = {
      name,
      speciality,
      image,
      fee,
    };

    const { id } = user;

    dispatch(createDoctorAction(doctors, id));
    doctorsName.value = '';
    doctorsSpeciality.value = '';
    doctorsBill.value = '';
    doctorsImage.value = '';
  };

  // useEffect(() => {
  //   if (newState.status === 200) {
  //     navigate('/doctors');
  //   } else if (newState.status !== 200 && newState.status !== '') {
  //     if (newState.fetchedData.error === 404) {
  //       setErrors(newState.fetchedData.errors);
  //     } else {
  //       setErrors(newState.fetchedData.errors);
  //     }
  //   }// eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [newState]);

  return (
    <section className="doctor-section">
      <div className="doctor-container">
        {/* <p>{errors}</p> */}
        <h3 className="doctor-title">Add A Doctor</h3>
        <form onSubmit={handleSubmit} className="doctor-form">
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <input
            className="form-control"
            id="speciality"
            type="text"
            name="speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            placeholder="Enter your speciality"
            required
          />
          <input
            type="text"
            name="image"
            value={image}
            id="image"
            className="form-control"
            placeholder="Enter an image url link"
            required
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="number"
            name="fee"
            id="fee"
            value={fee}
            className="form-control"
            placeholder="Enter your fee"
            required
            onChange={(e) => setFee(e.target.value)}
          />
          <input type="submit" value="Submit" className="button1 btn btn-secondary" />
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
