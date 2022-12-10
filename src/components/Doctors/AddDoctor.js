import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createDoctorAction } from '../../redux/doctorsReducer/doctors';
import './add_doctor.css';

const AddDoctor = () => {
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [fee, setFee] = useState('');

  const [image, setImage] = useState('');

  const user = useSelector((state) => state.user.fetchedData.data);

  const dispatch = useDispatch();

  const doctorsName = document.getElementById('name');
  const doctorsSpeciality = document.getElementById('speciality');
  const doctorsFee = document.getElementById('fee');
  const doctorsImage = document.getElementById('image');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const doctors = new FormData();
    doctors.append('doctor[name]', name);
    doctors.append('doctor[image]', image);
    doctors.append('doctor[speciality]', speciality);
    doctors.append('doctor[fee]', fee);

    const { id } = user;

    dispatch(createDoctorAction(doctors, id));
    doctorsName.value = '';
    doctorsSpeciality.value = '';
    doctorsFee.value = '';
    doctorsImage.value = '';
    navigate('/doctors');
  };

  return (
    <section className="doctor-section">
      <div className="doctor-container">
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
            type="file"
            name="image"
            id="image"
            className="form-control"
            placeholder="Enter an image url link"
            required
            onChange={(e) => setImage(e.target.files[0])}
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
